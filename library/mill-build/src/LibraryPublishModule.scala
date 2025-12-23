package millbuild

import mill.javalib.*
import mill.javalib.publish.*
import mill.scalajslib.*
import mill.scalajslib.api.*
import mill.scalalib.*

trait LibraryPublishModule
    extends ScalaJSModule
    with PublishModule
    with LibraryBaseModule
    with CrossScalaModule {

  def scalaJSVersion = "1.20.1"

  def publishVersion = "3.0.0+3-805c1589-SNAPSHOT"

  def versionScheme = Some(VersionScheme.EarlySemVer)

}
