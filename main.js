import "./style.css";

if (process.env.NODE_ENV === "development") {
  import("./library/out/www/3.3.4/fastLinkJS.dest/main.js");
} else {
  import("./library/out/www/3.3.4/fullLinkJS.dest/main.js");
}
