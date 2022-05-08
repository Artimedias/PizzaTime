let pizzaString = "";
let allPizzas = [];
let price = 0;

function pizza(size, sauce, flavor, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.flavor = flavor;
    this.toppings = toppings;
    this.dressing = dressing;
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


function order (list, cost)
{
let orderString = "You Ordered " + list.length + " Pizzas.";
let currentString = "";
    for (i = 0; i < list.length; i++)
  {
  	 currentString = "";
    currentString = topper(currentString, list[i])

    cost += money(list[i])
   
  	orderString = orderString + ("\n A " + list[i].size + " " + list[i].sauce + " sauce pizza with " + list[i].flavor + " " + currentString + " and " + list[i].dressing + " on the side");

      
  }
  orderString = orderString + ("\n Your total is " + cost + " dollars. \n Thank you for eating at the Mountaintop Pizza Palace.")
 return orderString;
}

function extra (a, b, c)
{
    console.log("Reached!")
    if (a === b)
    {
        c = false;
    }
return c;
}

function line (size, sauce, flavor, toppings, dressing, command)
{
    newPizza = new pizza(size, sauce, flavor, toppings, dressing)
    command.push(newPizza);
}

function laser (array)
{
    for (i = 0; i < array.length; i++)
  {
    if (array[i].charAt(0) === "N" && array[i].charAt(1) === "o")
    {
        array[i] = ""
    }
    if (array[i] === array[i+1])
    {
        array[i] = ""
        array[i+1] = ("Extra-" + array[i+1])
    }
    console.log(array[i]);
  }
  return array;

}

function money (gold)
{
    let cash = parseInt(5);

    if (gold.sauce !== "")
    {
        cash += .5;
    }

    if (gold.flavor === "Garlic")
    {
        cash += .25;
    }
    else if ( gold.flavor === "Basil")
    {
        cash += 1;
    }
    else if (gold.flavor === "Garlic and Basil")
    {
        cash += 1.25;
    }

    gold.toppings.forEach(function(element)
    {
        if (element.charAt(0) === "E")
        {
            cash += 1.5;
        }
        else if (element !== "")
        {
            cash += 1;
        }
    });

    if (gold.dressing !== "No Sauce")
    {
        cash += 1;
    }

    if (gold.size === "Mini")
    {
        cash *= .75;
    }
    else if (gold.size === "Mega")
    {
        cash *= 1.5;
    }
    else if (gold.size === "Gluten Free")
    {
        cash *= 1.25;
    }

    cash *= 1.10
    //for tax

    cash.toFixed(2);
    //this doesnt work. Not sure why not.
    return cash;

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
let dressingP = "No Sauce"



let cheeseTruth = true;
let meatTruth = true;
let veggieTruth = true;

$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
     sizeP = $("#sizeInput").val();

    $(".form-size").toggle();
    $(".form-sauce").toggle();
    
  });
});

$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    sauceP = $("#sauceInput").val();

    $(".form-sauce").toggle();
    $(".form-flavor").toggle();
  });
});

$(document).ready(function() {
  $("#formThree").submit(function(event) {
    event.preventDefault();
    flavorP = $("#flavorInput").val();


    $(".form-flavor").toggle();
    $(".form-cheese-one").toggle();
  });
});

$(document).ready(function() {
  $("#formFour").submit(function(event) {
    event.preventDefault();
    cheeseP = $("#cheeseInputOne").val();
    console.log(cheeseP)

    cheeseTruth = extra(cheeseP, cheesePY, cheeseTruth)
    if(cheeseTruth === true)
    {
        $(".form-cheese-two").toggle();
    }
    else
    {
        $(".form-meat-one").toggle();
    }

    $(".form-cheese-one").toggle();

  });
});

$(document).ready(function() {
  $("#formFive").submit(function(event) {
    event.preventDefault();
    cheesePY = $("#cheeseInputTwo").val();
    console.log(cheesePY);
    console.log($("#cheeseInputTwo").val());

    $(".form-cheese-two").toggle();
    $(".form-meat-one").toggle();
  });
});

$(document).ready(function() {
  $("#formSix").submit(function(event) {
    event.preventDefault();
    meatP = $("#meatInputOne").val();

    meatTruth = extra(meatP, meatPY, meatTruth)
    if(meatTruth === true)
    {
        $(".form-meat-two").toggle();
    }
    else
    {
        $(".form-veggies-one").toggle();
    }

    $(".form-meat-one").toggle();
  });
});

$(document).ready(function() {
  $("#formSeven").submit(function(event) {
    event.preventDefault();
    meatPY = $("#meatInputTwo").val();

    $(".form-meat-two").toggle();
    $(".form-veggies-one").toggle();
  });
});

$(document).ready(function() {
  $("#formEight").submit(function(event) {
    event.preventDefault();
    veggieP = $("#veggieInputOne").val();

    veggieTruth = extra(veggieP, veggiePY, veggieTruth)
    if(veggieTruth === true)
    {
        $(".form-veggies-two").toggle();
    }
    else
    {
        $(".form-spice").toggle();
    }


    $(".form-veggies-one").toggle();
  });
});

$(document).ready(function() {
  $("#formNine").submit(function(event) {
    event.preventDefault();
    veggiePY = $("#veggieInputTwo").val();

    $(".form-veggies-two").toggle();
    $(".form-spice").toggle();
  });
});

$(document).ready(function() {
  $("#formTen").submit(function(event) {
    event.preventDefault();
    spiceP = $("#spiceInput").val();

    $(".form-spice").toggle();
    $(".form-dessing").toggle();
  });
});

$(document).ready(function() {
  $("#formEleven").submit(function(event) {
    event.preventDefault();
    dressingP = $("#dressingInput").val();

    $(".form-dessing").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();
  });
});

$(document).ready(function() {
  $("#formTwelve").submit(function(event) {
    event.preventDefault();

    $(".form-size").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();

    hat = [cheeseP, cheesePY, meatP, meatPY, veggieP, veggiePY, spiceP];
    hat = laser(hat);
    console.log(hat)

    line(sizeP, sauceP, flavorP, hat, dressingP, allPizzas);
    //orderString = order(allPizzas, price)

     sizeP = "Mod"
     sauceP = "Red"
     flavorP = "Neither"
     cheeseP = "Mozzerella"
     cheesePY = "No Cheese"
     meatP = "Pepperoni"
     meatPY = "No Meats"
     veggieP = "Red Onions"
     veggiePY = "No Veggies"
     spiceP = "No Spices"
     dressingP = "No Sauce"

     cheeseTruth = true;
     meatTruth = true;
     veggieTruth = true;
  });
});

$(document).ready(function() {
  $("#formThirteen").submit(function(event) {
    event.preventDefault();

    $(".form-newPizza").toggle();
    $(".No").toggle();
    

    hat = [cheeseP, cheesePY, meatP, meatPY, veggieP, veggiePY, spiceP];
    hat = laser(hat);
    console.log(hat)

    line(sizeP, sauceP, flavorP, hat, dressingP, allPizzas);
    orderString = order(allPizzas, price)
    $(".securityCode").text(orderString);

    $("#output").toggle();
  });
});
