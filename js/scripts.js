// Constructor
function Pizza(flavor, size, crust, toppings, total, orderNo){
    this.flavor = flavor
    this.size = size;
    this.crust =  crust;
    this.toppings = toppings;
    this.total = total;
    this.orderNo = orderNo;
}

// Create instances of the Pizza object
let firstPizza = new Pizza("Napoletana", "large", "crispy", "pepperoni", 1200, 1);
let secondPizza = new Pizza("Fritta", "medium", "gluten-free", "cheese", 800, 2);
let thirdPizza = new Pizza("Siciliana", "small", "thin", "bacon", 500, 3);


Pizza.prototype.myOrderDetails = function() {
   console.log("Your order has been received for a " +  this.flavor  +  this.size  + " Pizza, with a "  +  this.crust  +  " crust with a "  +  this.toppings + " topping!")
}


//UI
$(document).ready(function(){

    $('#orderAnotherButton, .pizza-orders, #grandTotal' ).hide();

  $('button#orderButton').click(function(){
    var flavorOfPizza = $('.pizza-flavor option:selected').val(); //get value from the pizza-flavor selected option
    var sizeOfPizza = $('.pizza-size option:selected').val(); //get value from the pizza-size selected option
    var crustOfPizza = $('.pizza-crust option:selected').val(); //get value from the pizza-crust selected option
    var toppingsOfPizza = $('.pizza-toppings option:selected').val(); //get value from the pizza-toppings selected option

    var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza); //get the Total amount of the pizza
    var order = 1; //assign default order number
    var grandTotal = 0; // for storing the total to be calculated

    // Appending fetched values from the select options
    $('#orderNo').html(order);
    $('#flavor').html(flavorOfPizza);
    $('#size').html($('.pizza-size option:selected').text() + " - " + sizeOfPizza );
    $('#crust').html($('.pizza-crust option:selected').text() + " - " + crustOfPizza);
    $('#toppings').html($('.pizza-toppings option:selected').text() + " - " + toppingsOfPizza);
    $('#total').html(total);
    grandTotal = grandTotal + total;

    $('#grandTotal span').html(grandTotal); // Displaying the grand total in our alert

    $('#orderButton').hide()
    $('#orderAnotherButton, .pizza-orders, #grandTotal').show();


    $('button#orderAnotherButton ').click(function(){
      var flavorOfPizza = $('.pizza-flavor option:selected').val();
      var sizeOfPizza = $('.pizza-size option:selected').val();
      var crustOfPizza = $('.pizza-crust option:selected').val();
      var toppingsOfPizza = $('.pizza-toppings option:selected').val();


      var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
      order = order + 1;
      grandTotal = grandTotal + total;
      let newPizza = new Pizza(flavorOfPizza, sizeOfPizza, crustOfPizza, toppingsOfPizza, total, order);
      let newPizzaOrder = '<p>Order No: <span id="orderNo">' + order + '</span> Flavor: <span id="flavor">' + newPizza.flavor + '</span>  Size: <span id="size">' +$('.pizza-size option:selected').text() + " - "  + newPizza.size + '</span>  Crust: <span id="crust">' + $('.pizza-crust option:selected').text() + " - " + newPizza.crust + '</span> Toppings: <span id="toppings">' + $('.pizza-toppings option:selected').text() + " - " + newPizza.toppings + '</span> <strong>Total: <span id="total">' + newPizza.total  + '</span> </strong></p>';

      $('.pizza-orders').append(newPizzaOrder);
      $('#grandTotal span').html(grandTotal);
    });

      $('button#checkoutButton').click(function(){
        alert("Order received. Total amount is KES " + grandTotal);
      });

      $('button#PickupButton').click(function(){
        alert("Your order will be ready for pickup in 20 mins. " + "Your bill is KES. " + grandTotal)
        alert("Thank for picking Tutti and come again!")
      })


       $('button#deliveryButton').click(function(){
         let deliverAmount = grandTotal + 200
         var name = prompt("Please enter your name:");
         var phone = prompt("Your Phone number:");
         var phone = prompt("Your location:");
         alert("Your bill plus delivery fee is KES " + deliverAmount );
         alert("Thank for picking Tutti and come again!")





       });


  });
});
