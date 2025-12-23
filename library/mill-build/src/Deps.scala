package millbuild

import mill.javalib.*

object Deps {

  val betterMonadicFor = mvn"com.olegpy::better-monadic-for:0.3.1"
  val catsCore = mvn"org.typelevel::cats-core::2.13.0"
  val catsEffect = mvn"org.typelevel::cats-effect::3.6.3"
  val catsEffectLaws = mvn"org.typelevel::cats-effect-laws::3.6.3"
  val catsEffectTestkit = mvn"org.typelevel::cats-effect-testkit::3.6.3"
  val catsTestkit = mvn"org.typelevel::cats-testkit::2.13.0"
  val catsTestkitScalatest = mvn"org.typelevel::cats-testkit-scalatest::2.1.5"
  val compileTime = mvn"com.github.japgolly.microlibs::compile-time::4.2.1"
  val disciplineScalatest = mvn"org.typelevel::discipline-scalatest::2.3.0"
  val fastTextEncoding = mvn"org.webjars.npm:fast-text-encoding:1.0.6"
  val kindProjector = mvn"org.typelevel:::kind-projector:0.13.4"
  // Monocle 2.1.0 - use _sjs1_2.13 suffix for Scala.js 1.x with Scala 2.13
  val monocleCore =
    mvn"com.github.julien-truffaut:monocle-core_sjs1_2.13:2.1.0;exclude=org.typelevel:*"
  val `monocleCore#0` = mvn"dev.optics::monocle-core::3.3.0"
  val nyayaGen = mvn"com.github.japgolly.nyaya::nyaya-gen::1.1.0"
  val nyayaProp = mvn"com.github.japgolly.nyaya::nyaya-prop::1.1.0"
  val nyayaTest = mvn"com.github.japgolly.nyaya::nyaya-test::1.1.0"
  val react = mvn"org.webjars.npm:react:18.3.1"
  val reactDom = mvn"org.webjars.npm:react-dom:18.3.1"
  val scalaCompiler = mvn"org.scala-lang:scala-compiler:2.13.17"
  val scalaReflect = mvn"org.scala-lang:scala-reflect:2.13.17"
  val scalafixCore = mvn"ch.epfl.scala::scalafix-core:0.12.1"
  val scalajsDom = mvn"org.scala-js::scalajs-dom::2.8.1"
  val scalatest = mvn"org.scalatest::scalatest::3.2.19"
  val sizzle = mvn"org.webjars.bower:sizzle:2.3.0"
  val sourcecode = mvn"com.lihaoyi::sourcecode::0.4.4"
  val testUtil = mvn"com.github.japgolly.microlibs::test-util::4.2.1"
  val testingLibrary__dom = mvn"org.webjars.npm:testing-library__dom:10.4.1"
  val types = mvn"com.github.japgolly.microlibs::types::4.2.1"
  val utest = mvn"com.lihaoyi::utest::0.8.5"
}
