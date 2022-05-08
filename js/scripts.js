let pizzaString = "";
let allPizzas = [];

function pizza(size, sauce, flavor, toppings, dressing, garnish) {
    this.size = size;
    this.sauce = sauce;
    this.flavor = flavor;
    this.toppings = toppings;
    this.dressing = dressing;
    this.garnish = garnish;
  }

  /*pizzaOne = new pizza("large", "red", ["Mozzerella" , "Black Olives", "Pepperoni"], "Hot Honey");
  allPizzas.push(pizzaOne);
  pizzaTwo = new pizza("mini", "white", ["Feta", "Green Peppers", "Green Peppers"], "Pesto")
  allPizzas.push(pizzaTwo);*/


function topper (pizzaString, pizza)
{
    pizza.toppings.forEach(function(element) {
        //console.log(element)
      pizzaString = pizzaString.concat(element);
      pizzaString += " ";
    });
 return pizzaString;
}

//orderString = order(allPizzas)
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

//UI
let sizeP = "Mod"
let sauceP = "Red"
let flavorP = "Neither"
let cheeseP = "Mozzerella"
let cheesePY = "No Cheese"
let meatP = "Pepperoni"
let meatPY = "No Meats"
let veggieP = "Red Onions"
let veggiePY = "No Veggies"
let spiceP = "No Spices"
let dressing = "No Sauce"

$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
     //sizeP = $("#sizeInput").val();

    $(".form-size").toggle();
    $(".form-sauce").toggle();
    
  });
});

$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-sauce").toggle();
    $(".form-flavor").toggle();
  });
});

$(document).ready(function() {
  $("#formThree").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-flavor").toggle();
    $(".form-cheese-one").toggle();
  });
});

$(document).ready(function() {
  $("#formFour").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-cheese-one").toggle();
    $(".form-cheese-two").toggle();
  });
});

$(document).ready(function() {
  $("#formFive").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-cheese-two").toggle();
    $(".form-meat-one").toggle();
  });
});

$(document).ready(function() {
  $("#formSix").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-meat-one").toggle();
    $(".form-meat-two").toggle();
  });
});

$(document).ready(function() {
  $("#formSeven").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-meat-two").toggle();
    $(".form-veggies-one").toggle();
  });
});

$(document).ready(function() {
  $("#formEight").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-veggies-one").toggle();
    $(".form-veggies-two").toggle();
  });
});

$(document).ready(function() {
  $("#formNine").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-veggies-two").toggle();
    $(".form-spice").toggle();
  });
});

$(document).ready(function() {
  $("#formTen").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-spice").toggle();
    $(".form-dessing").toggle();
  });
});

$(document).ready(function() {
  $("#formEleven").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-dessing").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();
  });
});

$(document).ready(function() {
  $("#formTwelve").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $(".form-size").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();
  });
});

$(document).ready(function() {
  $("#main").submit(function(event) {
    event.preventDefault();
    sizeP = $("#sizeInput").val();

    $("#main").toggle();
    $("#output").toggle();
  });
});
