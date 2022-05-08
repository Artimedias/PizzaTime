Tests

Testing: Pizza

Test 1: Pizza should be able to print out a pizza using all of the things inside the object

function pizza() {
    this.size = "large";
    this.sauce = "red";
    this.toppings = ["Mozzerlla" , "Pepperoni" , "Black Olives"]
    this.dressing = "no";
  }

console.log("You Ordered One Pizza. \n It is a " + pizza.size + pizza.sauce + " sauce pizza with " + pizza.toppings[1])

Expected Result:
You Ordered One Pizza.
It is a large red sauce pizza with Mozzerlla

Test failed
Reason: Fundemental issue
Solution: Rewrite

Test 2: Pizza should be able to print out a pizza using all of the things inside the object

let pizzaString = "";

function pizza(size, sauce, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.dressing = dressing;
  }

  pizzaOne = new pizza("large", "red", ["Mozzerella" , "Black Olives", "Pepperoni"], "Hot Honey");
  pizzaOne.toppings.forEach(function(element) {
  	console.log(element)
    pizzaString = pizzaString.concat(element);
    pizzaString += " ";
  });

console.log("You Ordered One Pizza. \n It is a " + pizzaOne.size + " " + pizzaOne.sauce + " sauce pizza with " + pizzaString);

Testing: Order

Test 1: Order should be able to read allPizzas and say what is the first topping on each

orderString = order(allPizzas)
function order (list)
{
    for (i = 0; i < list.length; i++)
  {
    console.log(list.toppings[0])
  }
   //console.log("You Ordered One Pizza. \n It is a " + pizzaOne.size + " " + pizzaOne.sauce + " sauce pizza with " + pizzaString);
}

Testing: topper

Test 1: topper should be able to consolidate all toppings into a single string

function topper (pizzaString, pizza)
{
    pizza.toppings.forEach(function(element) {
        console.log(element)
      pizzaString = pizzaString.concat(element);
      pizzaString += " ";
    });
 return pizzaString;
}


