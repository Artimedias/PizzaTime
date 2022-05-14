
let allPizzas = [];


function pizza(size, sauce, flavor, toppings, dressing) {
    this.size = size;
    this.sauce = sauce;
    this.flavor = flavor;
    this.toppings = toppings;
    this.dressing = dressing;
  }

function topper (pizza)
{
  let pizzaString = "";
    pizza.toppings.forEach(function(element) {
      pizzaString = pizzaString.concat(element);
      pizzaString += ", ";
    });
 return pizzaString;
}


function order (list)
{
 orderString = "You Ordered " + list.length + " Pizzas.";
let currentString = "";
price = 0;
    for (i = 0; i < list.length; i++)
  {
  	 currentString = "";
    currentString = topper(list[i])

    price += parseFloat(list[i].money());
   
  	orderString = orderString + ("\n A " + list[i].size + " " + list[i].sauce + " sauce pizza with " + list[i].flavor + " " + currentString + " with " + list[i].dressing + " on the side.");

      
  }
  orderString = orderString + ("\n Your total is " + price + " dollars. \n Thank you for eating at the Mountaintop Pizza Palace.")
 return orderString;
}

function extra (a, b, c)
{
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
  }
  return array;

}

pizza.prototype.money = function()
{
    let cash = parseInt(5);

    if (this.sauce !== "")
    {
        cash += .5;
    }

    if (this.flavor === "Garlic")
    {
        cash += .25;
    }
    else if ( this.flavor === "Basil")
    {
        cash += 1;
    }
    else if (this.flavor === "Garlic and Basil")
    {
        cash += 1.25;
    }

    this.toppings.forEach(function(element)
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

    if (this.dressing !== "No Sauce")
    {
        cash += 1;
    }

    if (this.size === "Mini")
    {
        cash *= .75;
    }
    else if (this.size === "Mega")
    {
        cash *= 1.5;
    }
    else if (this.size === "Gluten Free")
    {
        cash *= 1.25;
    }

    cash *= 1.10
    returnCash = cash.toFixed(2);
    //for tax
    return returnCash;

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

  $("#formTwo").submit(function(event) {
    event.preventDefault();
    sauceP = $("#sauceInput").val();

    $(".form-sauce").toggle();
    $(".form-flavor").toggle();
  });

  $("#formThree").submit(function(event) {
    event.preventDefault();
    flavorP = $("#flavorInput").val();


    $(".form-flavor").toggle();
    $(".form-cheese-one").toggle();
  });

  $("#formFour").submit(function(event) {
    event.preventDefault();
    cheeseP = $("#cheeseInputOne").val();

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

  $("#formFive").submit(function(event) {
    event.preventDefault();
    cheesePY = $("#cheeseInputTwo").val();

    $(".form-cheese-two").toggle();
    $(".form-meat-one").toggle();
  });

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

  $("#formSeven").submit(function(event) {
    event.preventDefault();
    meatPY = $("#meatInputTwo").val();

    $(".form-meat-two").toggle();
    $(".form-veggies-one").toggle();
  });

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

  $("#formNine").submit(function(event) {
    event.preventDefault();
    veggiePY = $("#veggieInputTwo").val();

    $(".form-veggies-two").toggle();
    $(".form-spice").toggle();
  });

  $("#formTen").submit(function(event) {
    event.preventDefault();
    spiceP = $("#spiceInput").val();

    $(".form-spice").toggle();
    $(".form-dessing").toggle();
  });

  $("#formEleven").submit(function(event) {
    event.preventDefault();
    dressingP = $("#dressingInput").val();

    $(".form-dessing").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();
  });

  $("#formTwelve").submit(function(event) {
    event.preventDefault();

    $(".form-size").toggle();
    $(".form-newPizza").toggle();
    $(".No").toggle();

    hat = [cheeseP, cheesePY, meatP, meatPY, veggieP, veggiePY, spiceP];
    hat = laser(hat);

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



  $("#formThirteen").submit(function(event) {
    event.preventDefault();

    $(".form-newPizza").toggle();
    $(".No").toggle();
    

    hat = [cheeseP, cheesePY, meatP, meatPY, veggieP, veggiePY, spiceP];
    hat = laser(hat);


    line(sizeP, sauceP, flavorP, hat, dressingP, allPizzas);
    orderString = order(allPizzas)
    $(".securityCode").text(orderString);

    $("#output").toggle();
  });
});
