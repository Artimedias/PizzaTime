//business

function pizza(size, sauce, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.dressing = dressing;
  }

  pizzaOne = new pizza("large", "red", ["Mozzerella" , "Black Olives", "Pepperoni"], "Hot Honey");
  pizzaOne.toppings.forEach(function(element) {
    pizzaString = pizzaString.concat(element); 
  });

console.log(pizzaString);
//user

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  });
});