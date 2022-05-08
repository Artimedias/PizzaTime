//business
let pizzaString = "";
let allPizzas = [];

function pizza(size, sauce, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.dressing = dressing;
  }

  pizzaOne = new pizza("large", "red", ["Mozzerella" , "Black Olives", "Pepperoni"], "Hot Honey");
  allPizzas.push(pizzaOne);
  pizzaTwo = new pizza("mini", "white", ["Feta", "Green Peppers", "Green Peppers"], "Pesto")
  allPizzas.push(pizzaTwo);


function toppings (pizzaString, pizza)
{
    pizza.toppings.forEach(function(element) {
        console.log(element)
      pizzaString = pizzaString.concat(element);
      pizzaString += " ";
    });
 return pizzaString;
}

orderString = order(allPizzas)
function order (list)
{
    for (i = 0; i < list.length; i++)
  {
    console.log(list[i].toppings[0])
  }
   //console.log("You Ordered One Pizza. \n It is a " + pizzaOne.size + " " + pizzaOne.sauce + " sauce pizza with " + pizzaString);
}
//user

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  });
});