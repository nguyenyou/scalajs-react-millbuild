import "./style.css";

if (process.env.NODE_ENV === "development") {
  import("./out/library/www/fastLinkJS.dest/main.js");
} else {
  import("./out/library/www/fullLinkJS.dest/main.js");
}
