// Require these npm packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=UPDATE
app.use(methodOverride("_method"));
// Static directory to be served

app.use(express.static("public"));
// app.use(express.static(__dirname +"/public"));
// app.use('public/assets/css', express.static(path.join(__dirname, 'public/assets/css')));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});