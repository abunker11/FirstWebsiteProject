function changeCoffeePrice(){
    // var userName = prompt("What is your name?")
    var header = document.getElementById("testMenu");
    // 1. need ask the user question --> store in var
    var newHeaderText = prompt("What would you like the header to say?");
    // 2. set the header's innerhtml to the users response
    header.innerHTML = newHeaderText;
    // alert(header.innerHTML)

    var coffeeCell = document.getElementById("coffeePrice");
    var newCoffeeCellText = prompt("What would you like the price of coffee to be?");
    coffeeCell.innerHTML = newCoffeeCellText;
}