var express = require("express");
var hbs     = require("express-handlebars");
var parser  = require"body-parser");
var mongoose= require("./db/connection");

var app     = express();
var Salad   = mongoose.model("Salad");

app.use(parser.json({extended: true}));
app.use("/assets", express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  layoutsDir:    "views",
  partialsDir:   "views",
  defaultLayout: "layout-main"
}))

app.get("/", function(req, res){
  res.render("main", {layout: false});
});

app.get("/api/salads", function(req, res){
  Salad.find().then(function(salads){
    res.json(salads);
  });
});

app.post("/api/salads", function(req, res){
  res.json(req.body);
})

app.listen(4000, function(){
  console.log("Why yes, I can do that, Dave.");
});
