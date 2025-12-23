package millbuild

import mill.javalib.*
import mill.javalib.publish.*
import mill.scalajslib.*
import mill.scalajslib.api.*
import mill.scalalib.*

trait LibraryPublishModule extends ScalaJSModule with LibraryBaseModule {

  def scalaJSVersion = "1.20.1"
}
