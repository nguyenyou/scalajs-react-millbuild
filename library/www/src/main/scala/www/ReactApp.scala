package www

import japgolly.scalajs.react._
import japgolly.scalajs.react.util.DefaultEffects.Sync
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom
import org.scalajs.dom.document
import scala.scalajs.js.annotation.JSExportTopLevel

@main
def main(): Unit = {
  val container = dom.document.getElementById("app")
  println(container)
  // ReactDOMClient.createRoot(container).render(ReactApp.component())
}

object ReactApp {

  // val component = ScalaFnComponent[Unit] { _ =>
  //   for {
  //     count <- useState(0)

  //     // Similar to componentDidMount and componentDidUpdate:
  //     _ <- useEffect(Callback {
  //            // Update the document title using the browser API
  //            document.title = s"You clicked ${count.value} times"
  //          })

  //     fruit <- useState("banana")
  //   } yield
  //     <.div(
  //       <.p(s"You clicked ${count.value} times"),
  //       <.button(
  //         ^.onClick --> count.modState(_ + 1),
  //         "Click meeeeeeeeeeeeeeeee"
  //       ),
  //       <.p(s"Your favourite fruit is a ${fruit.value}!")
  //     )
  // }

}
