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

Expected Result: 
You Ordered One Pizza.
It is a large red sauce pizza with Mozzerlla Black Olives Pepperoni

Testing: Order

Test 1: Order should be able to read allPizzas and say what is the first topping on each

orderString = order(allPizzas)
function order (list)
{
    for (i = 0; i < list.length; i++)
  {
    console.log(list.toppings[0])
  }

}

Expected Result:

MozzerellaFeta


Test 2: Order should be able to work with topper, and correctly say how many pizzas were ordered.

function order (list)
{
let orderString = "You Ordered " + list.length + " Pizzas.";
let currentString = "";
    for (i = 0; i < list.length; i++)
  {
    currentString = topper(currentString, list[i])
    
  	orderString.concat("\n A " + list[i].size + " " + list[i].sauce + " sauce pizza with " + currentString);
  }
 console.log(orderString);
}

Expected Result: 
You Ordered Two Pizzas
A large red sauce pizza with Mozzerlla Black Olives Pepperoni
A mini white sauce pizza with Feta Green Peppers

Test Failed.
Reason: Concat isnt playing nice today
Solution: replace concat with just a +=

Test 3: Order should be able to work with topper, and correctly say how many pizzas were ordered.

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

Expected Result
You Ordered Two Pizzas
A large red sauce pizza with Mozzerlla Black Olives Pepperoni
A mini white sauce pizza with Feta Green Peppers



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

Testing: line

Test 1: Line should be able to take in whatever the customer inputs, and put it together as a pizza object

    newPizza = new pizza(size, sauce, flavor, toppings, garnish, dressing)
    command.push(newPizza);

Expected Result: it works idk im tired. It worked.

Testing: laser

Test 1: Lazer should destroy any instances of the customer ordering no toppings or anything, and replace double orders with an "extra"

    hat = [cheeseP, cheesePY, meatP, meatPY, veggieP, veggiePY];
    hat = laser(hat);

function laser (array)
{
    for (i = 0; i < array.length; i++)
  {
    if (array[i].charAt(0) === N && array[i].charAt(1) === o)
    {
        array[i] = ""
    }
    if (array[i] === array[i+1])
    {
        array[i] = ""
        array[i+1] = ("Extra " + array[i+1])
    }
  }
}

Expected Result: 


