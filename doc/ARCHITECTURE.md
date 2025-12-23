# How scalajs-react Works: A Deep Dive

## Overview

scalajs-react is a sophisticated library that bridges **React.js** with **Scala.js**. It works through several interconnected layers:

1. **Facade Layer** - Low-level JavaScript interop
2. **Effects System** - The `Callback` monad for side effects
3. **VDOM DSL** - Type-safe virtual DOM construction
4. **Component API** - Building React components in Scala
5. **Hooks System** - React hooks with Scala semantics

---

## 1. Facade Layer (JavaScript Interop)

The foundation is the **facade** layer which provides Scala.js bindings to React's JavaScript API.

Located in `library/facadeMain/src/main/scala/japgolly/scalajs/react/facade/`:

```scala
@JSImport("react", JSImport.Namespace, "React")
@js.native
object React extends React {
  final val Fragment: js.Symbol = js.native
  final def createElement(`type`: String, props: js.Object, children: Node*): DomElement = js.native
}
```

The `@JSImport` annotation tells Scala.js to import the `react` npm module. Methods marked `js.native` are implemented in JavaScript.

**Hooks facade** (`Hooks.scala`):

```scala
@js.native
trait Hooks extends js.Object {
  final def useState[S](initial: S | js.Function0[S]): UseState[S] = js.native
  final def useEffect(effect: UseEffectArg, deps: js.UndefOr[HookDeps]): Unit = js.native
  final def useRef[A](f: A): React.RefHandle[A] = js.native
}
```

---

## 2. Effects System (Callback & Trampoline)

The heart of scalajs-react's purity is the **`Callback`** monad—a lazy, referentially-transparent way to represent side effects.

### How Callback Works

Located in `library/callback/src/main/scala/japgolly/scalajs/react/callback/`:

```scala
final class CallbackTo[+A](private val trampoline: Trampoline[A]) extends AnyVal {
  // The callback is NOT executed until runNow() is called
  def runNow(): A = trampoline.run
  
  def flatMap[B](f: A => CallbackTo[B]): CallbackTo[B] =
    new CallbackTo(trampoline.flatMap(f.andThen(_.trampoline)))
}
```

**Key insight:** `CallbackTo` wraps a `Trampoline[A]`. Nothing executes until `runNow()` is called. This enables:
- **Composition:** Chain callbacks with `flatMap`, `>>`, `>>=`
- **Referential transparency:** The same callback always represents the same computation
- **Stack safety:** Trampoline prevents stack overflow for deep recursion

### The Trampoline

Located in `library/util/src/main/scala/japgolly/scalajs/react/util/Trampoline.scala`:

```scala
sealed trait Trampoline[+A] {
  final def run: A = Trampoline.run(this)
  final def flatMap[B](f: A => Trampoline[B]): Trampoline[B] = new FlatMap(this, f)
}

object Trampoline {
  class Pure[+A](val value: A) extends Trampoline[A]
  class Delay[+A](val value: () => A) extends Trampoline[A]
  class FlatMap[A, +B](val from: Trampoline[A], val f: A => Trampoline[B]) extends Trampoline[B]
}
```

Instead of using the JVM/JS call stack, it uses a **heap-allocated stack** (`js.Array`), making deeply nested callbacks safe.

---

## 3. VDOM DSL (Virtual DOM)

The VDOM layer provides a type-safe DSL for building React elements.

### The `<.` and `^.` Syntax

Located in `library/coreGeneric/src/main/scala/japgolly/scalajs/react/vdom/Packages.scala`:

```scala
object html_<^ extends PackageBase {
  val < = HtmlTags         // <.div, <.span, <.button, etc.
  val ^ = HtmlAttrAndStyles // ^.onClick, ^.className, ^.style, etc.
}
```

### TagOf - The Tag Builder

`TagOf[N]` represents an HTML/SVG tag (in `TagOf.scala`):

```scala
class TagOf[+N <: TopNode](val tag: String, protected val modifiers: List[Seq[TagMod]]) extends VdomElement {
  def apply(xs: TagMod*): TagOf[N] = copy(modifiers = xs :: modifiers)
  
  override lazy val rawElement: facade.React.Element = {
    val b = new VdomBuilder.ToRawReactElement()
    modifiers.reverse.flatten.foreach(_.applyTo(b))
    b.render(tag)  // Calls React.createElement(tag, props, children)
  }
}
```

### TagMod - The Modifier Pattern

**`TagMod`** is anything that can modify a tag—children, attributes, styles, event handlers:

```scala
trait TagMod {
  def applyTo(b: VdomBuilder): Unit  // Modifies the builder
}
```

When you write:
```scala
<.div(^.className := "container", ^.onClick --> myCallback, "Hello")
```

Each argument is a `TagMod`:
- `^.className := "container"` → sets an attribute
- `^.onClick --> myCallback` → sets an event handler  
- `"Hello"` → adds a child (via implicit conversion)

---

## 4. Component API

### Class Components (ScalaComponent.builder)

Located in `library/coreGeneric/src/main/scala/japgolly/scalajs/react/component/builder/`:

```scala
object EntryPoint {
  def apply[Props](displayName: String): Step1[Props] =
    new Step1[Props](displayName)
}
// Usage: ScalaComponent.builder[Props].initialState(...).render(...).build
```

The builder goes through steps:
1. **Step1** - Define props type
2. Add initial state, backend
3. Define render function
4. Add lifecycle methods
5. **`.build`** - Creates the final component

### Function Components (ScalaFnComponent)

Located in `library/coreGeneric/src/main/scala/japgolly/scalajs/react/component/ScalaFn.scala`:

```scala
object ScalaFn {
  def apply[P](render: P => Delayed[VdomNode]): Component[P, s.CT] =
    create(derivedDisplayName)(b => render(b.unbox))
    
  def withHooks[P]: HookComponentBuilder.ComponentP.First[P] =
    HookComponentBuilder.apply[P](derivedDisplayName)
}
```

### The Delayed Type

Render functions return `Delayed[VdomNode]`—similar to `Trampoline`, it defers evaluation:

```scala
final class Delayed[+A](private val trampoline: Trampoline[A]) extends AnyVal {
  def eval(): A = trampoline.run  // Only runs when React needs the result
  def flatMap[B](f: A => Delayed[B]): Delayed[B] = // for-comprehension support
}
```

This is why you can use **for-comprehensions** in render functions!

---

## 5. Hooks System

### How useState Works

Located in `library/coreGeneric/src/main/scala/japgolly/scalajs/react/hooks/Hooks.scala`:

```scala
object UseState {
  def unsafeCreate[S](initialState: => S): UseState[S] = {
    // Box the state because React uses reflection to detect setState vs modState
    val initialStateFn = (() => Box(initialState)): js.Function0[Box[S]]
    val originalResult = facade.React.useState[Box[S]](initialStateFn)  // Call React!
    val originalSetState = Reusable.byRef(originalResult._2)
    UseState(originalResult, originalSetState).xmap(_.unbox)(Box.apply)
  }
}
```

The pattern:
1. **Box** the Scala value (wrap in a JS-friendly container)
2. Call `facade.React.useState`
3. **Unbox** when reading `.value`
4. Wrap setter in a `Callback` for type-safety

### Hook Builder DSL

The `ScalaFnComponent.withHooks[P]` API provides a builder pattern for hooks:

```scala
ScalaFnComponent.withHooks[Props]
  .useState(0)                              // Hook 1: counter state
  .useEffectBy((_, count) => Callback { ... })  // Hook 2: effect
  .useState("banana")                       // Hook 3: fruit state
  .render((props, count, fruit) => <.div(...))
```

Each `.useState`, `.useEffect` etc. adds a hook to the chain. The `.render` function receives all hook results.

---

## 6. Complete Data Flow

Here's what happens when you render a component:

```
1. Component instantiated with props
       ↓
2. Hooks called in order (useState, useEffect, etc.)
       ↓
3. Render function called → returns Delayed[VdomNode]
       ↓
4. Delayed.eval() called → runs Trampoline
       ↓
5. VdomElement.rawElement accessed → VdomBuilder runs
       ↓
6. TagMods applied → accumulates props, children
       ↓
7. VdomBuilder calls facade.React.createElement(tag, props, children)
       ↓
8. Returns facade.React.Element (JavaScript React element)
       ↓
9. React reconciles with DOM
```

---

## 7. Key Design Patterns

### Boxing/Unboxing

Scala values are wrapped in `Box[A]` for React because React uses reference equality and reflection. The box ensures Scala's structural equality doesn't interfere.

### Reusability

`Reusable[A]` memoizes values for React's reconciliation. It's like `React.memo` but type-safe.

### Effect Polymorphism

The library supports multiple effect types:
- `Callback` (built-in)
- `cats.effect.IO`
- `cats.effect.SyncIO`

Through the `Effect` typeclass hierarchy (`Sync`, `Async`, `Dispatch`), components can be effect-agnostic.

---

## 8. Module Structure

| Module | Purpose |
|--------|---------|
| `facadeMain` | Low-level React.js bindings |
| `facadeTest` | ReactTestUtils bindings |
| `callback` | `Callback`, `CallbackTo`, `AsyncCallback` |
| `coreGeneric` | VDOM, components, hooks (effect-agnostic) |
| `coreBundleCallback` | Core with `Callback` as default effect |
| `coreBundleCatsEffect` | Core with `IO` as default effect |
| `coreExtCats` | Cats typeclass instances |
| `coreExtCatsEffect` | Cats Effect integration |
| `extra` | Router, performance utils, additional components |
| `extraExtMonocle3` | Monocle optics integration |
| `testUtil` | Testing utilities |

---

## 9. Summary Table

| Layer | Purpose | Key Types |
|-------|---------|-----------|
| **Facade** | JS interop | `facade.React`, `facade.Hooks` |
| **Effects** | Pure side effects | `Callback`, `CallbackTo`, `Trampoline` |
| **VDOM** | DOM construction | `TagOf`, `TagMod`, `VdomBuilder` |
| **Components** | React components | `ScalaComponent`, `ScalaFnComponent` |
| **Hooks** | State & effects | `UseState`, `UseEffect`, `UseRef` |

The genius of scalajs-react is that all of this complexity is hidden behind a clean, type-safe API that feels natural to both Scala and React developers.

