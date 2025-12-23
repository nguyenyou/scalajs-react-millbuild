package millbuild

import mill.javalib.*
import mill.javalib.publish.*
import mill.scalajslib.*
import mill.scalajslib.api.*
import mill.scalalib.*

trait LibraryBaseModule extends ScalaJSModule with SbtModule {

  def scalaVersion = "3.7.4"

  def scalaJSVersion = "1.20.1"

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
    "-Xno-generic-signatures",
    "-source:3.0-migration",
    "-Wconf:msg=unused:s",
    "-Xkind-projector"
  )

}
