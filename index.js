var express = require("express");

var app     = express();

app.get("/", function(req, res){
  res.send("Hello again, Dave.");
});

app.listen(4000, function(){
  console.log("Why yes, I can do that, Dave.");
});
