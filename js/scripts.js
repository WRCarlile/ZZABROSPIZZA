// business logic
function Order(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

var orderSize = 0;
var orderTopping =0;


Order.prototype.addSize = function() {

  if (this.pizzaSize === "XXTRA Large $25"){
    return orderSize + 25
  } else if (this.pizzaSize === "Large $20") {
    return orderSize + 20
  } else if (this.pizzaSize === "Medium $15") {
    return orderSize + 15
  } else if (this.pizzaSize === "Small $12") {
    return orderSize + 12
  } else if (this.pizzaSize === "Personal $10") {
    return orderSize + 10
  } else {
    return orderSize
    }
}

Order.prototype.addTopping = function() {
  if (this.pizzaTopping === "Pepperoni $1 Extra") {
  return orderTopping + 1
} else if (this.pizzaTopping === "Sausage $2 Extra") {
  return orderTopping + 2
} else {
  return orderTopping
  }
}
//user interface logic
$(document).ready(function() {

  $("form#custom").submit(function(event) {
    event.preventDefault();

  var inputtedSize= $("#size").val();
  var inputtedToppings = $("#toppings").val();
  var newOrder = new Order(inputtedSize, inputtedToppings);
  var total = newOrder.addSize() + newOrder.addTopping()
  console.log(newOrder);
  $("#result h2").text("Your Pizza Reciept");
  $("#result h3").text(inputtedSize + " " + inputtedToppings);  //h4 is last here because if you look at the HTML, #result is the parent
  $("#price").text("$" + total);  //in this case, p comes first because it's the parent




  });
});
