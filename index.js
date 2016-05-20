var express = require("express");
var hbs     = require("express-handlebars");
var parser  = require("body-parser");
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


app.get("/api/salads", function(req, res){
  Salad.find().then(function(salads){
    res.json(salads);
  });
});

app.get("/api/salads/:_id", function(req, res){
  Salad.findOne(req.params).then(function(salad){
    res.json(salad);
  });
});

app.put("/api/salads/:_id", function(req, res){
  console.log(req.body)
  Salad.findOneAndUpdate(req.params, req.body, {new: true}).then(function(salad){
    res.json(salad);
  });
});

app.delete("/api/salads/:_id", function(req, res){
  Salad.findOneAndRemove(req.params).then(function(salad){
    res.json({success: true});
  });
});

app.post("/api/salads", function(req, res){
  if (req.body !== null || req.body !== " "){
    Salad.create(req.body).then(function(salad){
      res.json(salad);
    });
  }
});

app.get("/*", function(req, res){
  res.render("main", {layout: false});
});

app.listen(4000, function(){
  console.log("Why yes, I can do that, Dave.");
});
