package millbuild

import mill.javalib.*
import mill.scalalib.*

trait LibraryBaseModule extends CrossScalaModule with CrossSbtModule {

  def scalacOptions = super.scalacOptions() ++ Seq(
    "-deprecation",
    "-feature",
    "-language:postfixOps",
    "-language:implicitConversions",
    "-language:higherKinds",
    "-language:existentials",
    "-unchecked",
    "-Wconf:msg=may.not.be.exhaustive:e",
    "-Wconf:msg=Reference.to.uninitialized.value:e",
    "-Yno-generic-signatures",
    "-source:3.0-migration",
    "-Wconf:msg=unused:s",
    "-Ykind-projector"
  )

}
