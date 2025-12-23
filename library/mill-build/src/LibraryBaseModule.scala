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
    "-Yno-generic-signatures"
  ) ++
    (scalaVersion() match {
      case "2.13.17" => Seq(
          "-Yrangepos",
          "-opt:l:inline",
          "-opt-inline-from:japgolly.scalajs.react.**",
          "-Wconf:cat=lint-infer-any&msg=kind-polymorphic:s",
          "-Wunused:explicits",
          "-Wunused:implicits",
          "-Wunused:imports",
          "-Wunused:locals",
          "-Wunused:nowarn",
          "-Wunused:patvars",
          "-Wunused:privates",
          "-Xlint:adapted-args",
          "-Xlint:constant",
          "-Xlint:delayedinit-select",
          "-Xlint:deprecation",
          "-Xlint:eta-zero",
          "-Xlint:implicit-not-found",
          "-Xlint:inaccessible",
          "-Xlint:infer-any",
          "-Xlint:missing-interpolator",
          "-Xlint:nonlocal-return",
          "-Xlint:nullary-unit",
          "-Xlint:option-implicit",
          "-Xlint:poly-implicit-overload",
          "-Xlint:private-shadow",
          "-Xlint:stars-align",
          "-Xlint:valpattern",
          "-Xmixin-force-forwarders:false",
          "-Yjar-compression-level",
          "9",
          "-Ymacro-annotations",
          "-Ypatmat-exhaust-depth",
          "off"
        )
      case "3.3.4" =>
        Seq("-source:3.0-migration", "-Wconf:msg=unused:s", "-Ykind-projector")
      case _ => Nil
    })

  def scalacPluginMvnDeps = super.scalacPluginMvnDeps() ++
    (scalaVersion() match {
      case "2.13.17" => Seq(Deps.betterMonadicFor, Deps.kindProjector)
      case _         => Nil
    })

}
