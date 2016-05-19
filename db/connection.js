var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/salad-shooter");

var Topping = mongoose.Schema({
  text:     String
});

var Salad = mongoose.Schema({
  text:     String,
  toppings: [Topping]
});

mongoose.model("Salad",   Salad);
mongoose.model("Topping", Topping);

module.exports = mongoose;
