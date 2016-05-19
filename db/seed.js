var mongoose  = require("./connection");
var seed_data = require("./salad_seeds");

var Salad     = mongoose.model("Salad")

Salad.remove().then(function(){
  Salad.collection.insert(seed_data).then(function(){
    process.exit();
  });
});


// To see the seeded database, use this command in Mongo:
// db.salads.find().pretty()
// Mongo automatically pluralizes "salads" and ignored the
// name after the under_score.
