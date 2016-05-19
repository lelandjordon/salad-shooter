var mongoose  = require("./connection");
var seed_data = require("./salad_seeds");

var Salad     = mongoose.model("Salad")

Salad.remove().then(function(){
  Salad.collection.insert(seed_data).then(function(){
    process.exit();
  });
});
