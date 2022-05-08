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


function topper (pizzaString, pizza)
{
    pizza.toppings.forEach(function(element) {
        //console.log(element)
      pizzaString = pizzaString.concat(element);
      pizzaString += " ";
    });
 return pizzaString;
}

orderString = order(allPizzas)
function order (list)
{
let orderString = "You Ordered " + list.length + " Pizzas.";
let currentString = "";
    for (i = 0; i < list.length; i++)
  {
  	let currentString = "";
    currentString = topper(currentString, list[i])
   
  	orderString = orderString + ("\n A " + list[i].size + " " + list[i].sauce + " sauce pizza with " + currentString);
  }
 console.log(orderString);
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  });
});