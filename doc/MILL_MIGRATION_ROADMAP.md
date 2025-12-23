# Mill Build Tool Migration Roadmap

This document outlines the migration path from sbt to [Mill Build Tool](https://mill-build.org/) for the scalajs-react project.

## Current sbt Build Overview

### Project Structure

The project consists of **two main sbt builds**:
1. **Main library** (`library/`) - The core scalajs-react library
2. **Downstream tests** (`downstream-tests/`) - Integration tests consuming the library

### Key Components

#### sbt Version & Plugins
- sbt 1.11.7
- Plugins:
  - `sbt-scalajs` (1.20.1) - Scala.js compilation
  - `sbt-jsdependencies` (1.0.2) - JS dependency management
  - `sbt-scalafix` (0.12.1) - Linting/refactoring
  - `sbt-ci-release` (1.11.2) - Maven Central publishing

#### Scala Versions
- Scala 2.13.17 (primary)
- Scala 3.3.0 (cross-compiled)

#### Subprojects (24 modules in library)

| Module | Published Name | Description |
|--------|---------------|-------------|
| `util` | util | Base utilities |
| `utilFallbacks` | util-fallbacks | Fallback implementations |
| `utilDummyDefaults` | util-dummy-defaults | Dummy default implementations |
| `utilCatsEffect` | util-cats_effect | Cats Effect utilities |
| `callback` | callback | Callback abstraction |
| `callbackExtCats` | callback-ext-cats | Cats integration for Callback |
| `callbackExtCatsEffect` | callback-ext-cats_effect | Cats Effect for Callback |
| `facadeMain` | facade | React facade |
| `facadeTest` | facade-test | Test facade |
| `coreGeneric` | core-generic | Generic core module |
| `coreExtCats` | core-ext-cats | Cats extension |
| `coreExtCatsEffect` | core-ext-cats_effect | Cats Effect extension |
| `coreBundleCallback` | core | Main bundle with Callback |
| `coreBundleCatsEffect` | core-bundle-cats_effect | Bundle with Cats Effect |
| `coreBundleCBIO` | core-bundle-cb_io | Bundle with CB + IO |
| `extra` | extra | Extra utilities |
| `extraExtMonocle2` | extra-ext-monocle2 | Monocle 2 integration |
| `extraExtMonocle3` | extra-ext-monocle3 | Monocle 3 integration |
| `testUtil` | test | Test utilities |
| `testUtilMacros` | test-macros | Test macro utilities |
| `testingLibraryDom` | testing_library-dom | Testing Library DOM |
| `scalafixRules` | scalafix | Scalafix rules (JVM only) |
| `ghpages` | (unpublished) | GitHub pages demo |
| `ghpagesMacros` | (unpublished) | Macros for ghpages |
| `tests` | (unpublished) | Unit tests |
| `testsDep` | (unpublished) | Deprecated API tests |

#### Key Dependencies

| Dependency | Version | Used By |
|-----------|---------|---------|
| cats-core | 2.13.0 | callbackExtCats, coreExtCats |
| cats-effect | 3.6.3 | callbackExtCatsEffect, coreExtCatsEffect |
| scalajs-dom | 2.8.1 | facadeMain, util |
| monocle-core (v2) | 2.1.0 | extraExtMonocle2 |
| monocle-core (v3) | 3.3.0 | extraExtMonocle3 |
| utest | 0.8.5 | Test framework |
| microlibs | 4.2.1 | Various utilities |

#### Special Build Features

1. **Code Generation**: `GenHooks.scala` generates boilerplate for hooks
2. **Browser Testing**: Selenium/JSDOM integration
3. **JS Dependencies**: React.js, Sizzle.js, testing-library/dom
4. **Scalafix Integration**: Custom scalafix rules for `ProhibitDefaultEffects`
5. **Source Map URIs**: Custom source map URL generation for releases

---

## Mill Migration Roadmap

### Phase 1: Foundation Setup

#### 1.1 Install Mill and Create Initial Structure

```bash
# Create mill wrapper
curl -L https://raw.githubusercontent.com/lefou/millw/main/millw > mill && chmod +x mill
```

Create `build.mill` with basic project structure.

#### 1.2 Define Common Settings Module

Create a `ScalaJsReactModule` trait extending `ScalaJSModule`:

```scala
// build.mill
import mill._
import mill.scalalib._
import mill.scalajslib._

trait ScalaJsReactModule extends ScalaJSModule with PublishModule {
  def scalaVersion = "2.13.17"
  def scalaJSVersion = "1.20.1"
  
  def scalacOptions = T {
    super.scalacOptions() ++ Seq(
      "-deprecation",
      "-feature",
      "-language:postfixOps",
      // ... other flags
    )
  }
}
```

#### 1.3 Define Version Constants

```scala
object Versions {
  val scala2 = "2.13.17"
  val scala3 = "3.3.0"
  val cats = "2.13.0"
  val catsEffect = "3.6.3"
  val scalaJsDom = "2.8.1"
  // ... etc
}
```

### Phase 2: Module Migration

#### 2.1 Migration Order (Dependency-Aware)

Migrate modules in dependency order (leaf modules first):

1. **Tier 1** (no internal deps): `utilFallbacks`, `facadeMain`, `ghpagesMacros`
2. **Tier 2**: `util`, `facadeTest`, `scalafixRules`
3. **Tier 3**: `callback`, `utilCatsEffect`, `utilDummyDefaults`
4. **Tier 4**: `callbackExtCats`, `coreGeneric`
5. **Tier 5**: `callbackExtCatsEffect`, `coreExtCats`, `extra`, `testUtilMacros`
6. **Tier 6**: `coreExtCatsEffect`, `extraExtMonocle2/3`, `testUtil`
7. **Tier 7**: `coreBundleCallback`, `coreBundleCatsEffect`, `coreBundleCBIO`, `testingLibraryDom`
8. **Tier 8**: `tests`, `testsDep`, `ghpages`

#### 2.2 Example Module Definition

```scala
object util extends ScalaJsReactModule {
  def moduleDeps = Seq(utilFallbacks)

  def ivyDeps = Agg(
    ivy"org.scala-js::scalajs-dom::${Versions.scalaJsDom}"
  )

  object test extends ScalaJSTests with TestModule.Utest {
    def ivyDeps = Agg(ivy"com.lihaoyi::utest::${Versions.utest}")
  }
}
```

#### 2.3 Cross-Build Setup

```scala
object callback extends Cross[CallbackModule](Versions.scala2, Versions.scala3)

trait CallbackModule extends ScalaJsReactModule with Cross.Module[String] {
  def scalaVersion = crossValue

  def scalacOptions = T {
    val base = super.scalacOptions()
    if (crossValue.startsWith("2")) base ++ scala2Flags
    else base ++ scala3Flags
  }
}
```

### Phase 3: Plugin Equivalents

#### 3.1 Scala.js Support
- ✅ Built-in: `mill.scalajslib.ScalaJSModule`

#### 3.2 Publishing to Maven Central
- ✅ Built-in: `mill.scalalib.PublishModule`
- For CI release workflow, use `mill.contrib.sonatypecentral.SonatypeCentralPublishModule`

#### 3.3 Scalafix Integration
- Use: `mill.contrib.scalafix.ScalafixModule`

```scala
import mill.contrib.scalafix.ScalafixModule

trait ScalaJsReactModule extends ScalaJSModule with ScalafixModule {
  def scalafixIvyDeps = Agg(
    ivy"ch.epfl.scala:::scalafix-rules:${Versions.scalafix}"
  )
}
```

#### 3.4 JS Dependencies (sbt-jsdependencies replacement)

Mill doesn't have a direct equivalent. Options:

**Option A: Use npm/yarn via ScalaJS Bundler**
```scala
import mill.scalajslib.ScalaJSBundlerModule

trait WithJsDeps extends ScalaJSBundlerModule {
  def npmDeps = Seq(
    "react" -> "18.3.1",
    "react-dom" -> "18.3.1"
  )
}
```

**Option B: Manual Resource Management**
- Place JS files in `resources/`
- Use `@JSImport` for module imports
- Configure webpack/vite externally

### Phase 4: Custom Tasks Migration

#### 4.1 Code Generation (GenHooks)

```scala
object coreGeneric extends ScalaJsReactModule {
  def generatedSources = T {
    val outDir = T.dest / "hooks"
    GenHooks(outDir)
    Seq(PathRef(outDir))
  }
}
```

#### 4.2 Source Maps to GitHub

```scala
trait SourceMapsModule extends ScalaJSModule {
  def scalaJSMapSourceURI = T {
    if (!isSnapshot()) {
      val base = millSourcePath.toIO.toURI.toString
      val target = s"https://raw.githubusercontent.com/japgolly/scalajs-react/v${publishVersion()}/"
      Some(base -> target)
    } else None
  }
}
```

### Phase 5: Testing Setup

#### 5.1 uTest Framework

```scala
trait UtestModule extends ScalaJSModule {
  object test extends ScalaJSTests with TestModule.Utest {
    def ivyDeps = Agg(
      ivy"com.lihaoyi::utest::${Versions.utest}"
    )

    def jsEnvConfig = T {
      JsEnvConfig.JsDom()
    }
  }
}
```

#### 5.2 Browser Testing (Selenium)

```scala
def jsEnvConfig = T {
  JsEnvConfig.Selenium(
    capabilities = new org.openqa.selenium.remote.DesiredCapabilities()
  )
}
```

### Phase 6: CI/CD Integration

#### 6.1 GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: coursier/setup-action@v1
      - name: Compile
        run: ./mill __.compile
      - name: Test
        run: ./mill __.test
      - name: Publish
        if: github.ref == 'refs/heads/main'
        run: ./mill __.publish
        env:
          SONATYPE_USERNAME: ${{ secrets.SONATYPE_USERNAME }}
          SONATYPE_PASSWORD: ${{ secrets.SONATYPE_PASSWORD }}
```

### Phase 7: Migration Checklist

#### Pre-Migration
- [ ] Document all custom sbt settings and tasks
- [ ] Inventory all plugin functionality used
- [ ] Create test baseline (run all tests, record results)

#### Module Migration
- [ ] Set up `build.mill` with version definitions
- [ ] Migrate `utilFallbacks` (simplest module)
- [ ] Verify cross-compilation works
- [ ] Migrate remaining Tier 1 modules
- [ ] Continue through all tiers
- [ ] Migrate test modules

#### Validation
- [ ] All modules compile for Scala 2.13 & 3.3
- [ ] All tests pass
- [ ] Publishing workflow works (test with `-SNAPSHOT`)
- [ ] JS dependencies are correctly bundled
- [ ] Source maps work in browser devtools

#### Cleanup
- [ ] Remove `project/` directories
- [ ] Remove `*.sbt` files
- [ ] Update CI configuration
- [ ] Update documentation

---

## Key Differences: sbt vs Mill

| Feature | sbt | Mill |
|---------|-----|------|
| Build definition | `.sbt` + `project/*.scala` | `build.mill` |
| Task caching | Incremental compilation | Content-addressable caching |
| Dependency syntax | `libraryDependencies += "org" %% "name" % "ver"` | `ivy"org::name:ver"` |
| Cross-building | `crossScalaVersions` | `Cross[Module](versions...)` |
| Plugin system | `addSbtPlugin()` | `import $ivy` or built-in contrib |
| Watch mode | `~compile` | `--watch compile` |
| Shell | `sbt shell` | `./mill --interactive` |

---

## Estimated Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Foundation | 1-2 days | None |
| Phase 2: Module Migration | 3-5 days | Phase 1 |
| Phase 3: Plugin Equivalents | 1-2 days | Phase 2 |
| Phase 4: Custom Tasks | 1-2 days | Phase 2 |
| Phase 5: Testing Setup | 1-2 days | Phase 4 |
| Phase 6: CI/CD | 1 day | Phase 5 |
| Phase 7: Validation | 2-3 days | All |
| **Total** | **10-17 days** | |

---

## Risks and Mitigations

### Risk 1: JS Dependencies Plugin Not Available
- **Impact**: High - React.js dependencies are critical
- **Mitigation**: Use ScalaJS Bundler module or manual webpack config

### Risk 2: Scalafix Integration Complexity
- **Impact**: Medium - Custom rules need migration
- **Mitigation**: Mill's scalafix contrib module supports custom rules

### Risk 3: Browser Testing Setup
- **Impact**: Medium - Currently disabled in sbt anyway
- **Mitigation**: Defer to JSDOM testing initially

### Risk 4: Publishing Workflow Changes
- **Impact**: High - Must maintain Maven Central publishing
- **Mitigation**: Test with snapshots before cutting releases

---

## Resources

- [Mill Documentation](https://mill-build.org/mill/main/Intro_to_Mill.html)
- [Mill Scala.js Module](https://mill-build.org/mill/main/scalalib/scala-js.html)
- [Mill Contrib Modules](https://mill-build.org/mill/main/contrib/contrib-modules.html)
- [sbt to Mill Migration Guide](https://mill-build.org/mill/main/From_SBT.html)
- [Example: Scala.js Project in Mill](https://github.com/com-lihaoyi/mill/tree/main/example/scalalib/native)

