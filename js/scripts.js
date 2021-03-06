// business logic
function Order(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
}

var orderSize = 0;
var orderTopping =0;

Order.prototype.addSize = function() {

  if (this.pizzaSize === "XXTRA Large"){
    return orderSize + 25
  } else if (this.pizzaSize === "Large") {
    return orderSize + 20
  } else if (this.pizzaSize === "Medium") {
    return orderSize + 15
  } else if (this.pizzaSize === "Small") {
    return orderSize + 12
  } else if (this.pizzaSize === "Personal") {
    return orderSize + 10
  } else {
    return orderSize
    }
}

Order.prototype.addTopping = function() {
  return this.pizzaTopping + orderTopping
}

//user interface logic
$(document).ready(function() {

  $("form#custom").submit(function(event) {
    event.preventDefault();

  var inputtedSize= $("#size").val();
  var inputtedToppings = $('#custom input[type="checkbox"]');
  var countBox = inputtedToppings.filter(':checked').length;
  var newOrder = new Order(inputtedSize, countBox);
  var total = newOrder.addSize() + newOrder.addTopping()

  $("#result h2").text("Your Order is:");
  $("#result h3").text("A " + inputtedSize + " Pizza");
  $("#price").text("$" + total);
  $("#zza").show();

  });
});
