let total = 0;
let checkOut = 0;

function GetPizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$("button.smt").click(function(event) {
  let pname=$(".name option:selected").val();
  let psize = $(".size option:selected").val();
  let pcrust = $(".crust option:selected").val();
  let ptopping = $(".topping option:selected").val();

  let nOrder = 0;

  total = parseInt(psize) + parseInt(pcrust) + parseInt(ptopping);
  nOrder = +1;
  checkOut = checkOut + total;

  $("#nOrder").html(nOrder);
  $("#pname").html($(".name option:selected").val());
  $("#sPizza").html($(".size option:selected").val());
  $("#cPizza").html($(".crust option:selected").val());
  $("#tPizza").html($(".topping option:selected").val());
  $("#totals").html(total);

  $("button.addPizza").click(function(event) {
    let pname=$(".name option:selected").val();
    let psize = $(".size option:selected").val();
    let pcrust = $(".crust option:selected").val();
    let ptopping = $(".topping option:selected").val();

    total = parseInt(psize) + parseInt(pcrust) + parseInt(ptopping);

    checkOut = checkOut + total;
    nOrder = nOrder +1;
    newOrder = new GetPizza(pname, psize, pcrust, ptopping, total);

    $("#orders").append(
      `<tr><td id="nOrder">` +
        nOrder +
      `</td><td id="pname">` +
        newOrder.name +
        `</td><td id="sPizza"> ` +
        newOrder.size +
        `</td><td id="cPizza"> ` +
        newOrder.crust +
        `</td><td id="tPizza"> ` +
        newOrder.topping +
        `</td><td id="totals"> ` +
        newOrder.total +
        `</td></tr>`
    );
    event.preventDefault();
});

  $("button.checkout").click(function(event) {
  $("button.checkout").hide();
  $("button.addPizza").hide();
  $("button.deliver").slideDown(1250);
  $("#totalPizza").append("Your bill is ksh. " + checkOut);

  event.preventDefault();
});

  event.preventDefault();


$("button.deliver").click(function() {
  $(".pizzatable").hide();
  $(".choice h2").hide();
  $(".delivery").slideDown(1250);
  $("#addedprice").hide();
  $("button.deliver").hide();
  $("#totalpizza").hide();

  let deliveryAmount = checkOut + 200;
  $("#bTotal").append(
    "Your bill plus delivery fee is: " + deliveryAmount
  );
});

$("button#final-order").click(function(event) {
  event.preventDefault();
  $("#pizzatotal").hide();
  $(".delivery").hide();
  $("button#final-order").hide();
  let dAmount = checkOut + 200;

  let person = $("input#name").val();
  let phone = $("input#phone").val();
  let location = $("input#location").val();

  if (
    $("input#name").val() &&
    $("input#phone").val() &&
    $("input#location").val() != ""
  ) {
    $("#fMessage").append(
      person +
        ", Order recieved,delivery in half an hour " +
        location +
        ". Payment is ksh. " +
        dAmount
    );
    $("#bTotal").hide();
    $("#fMessage").slideDown(1500);
  } else {
    alert("Please try again");
    $(".delivery").show();
    $("button#final-order").show();
  }

});

});
$('.col-md-4 #im1').click(function(){
$('#p1').toggle(500);
$('.choice h2').toggle(700);
});
$('.col-md-4 #im2').click(function(){
$('#p1').toggle(500);
$('.choice h2').toggle(700);
});
$('.col-md-4 #im3').click(function(){
$('#p1').toggle(500);
$('.choice h2').toggle(700);
});
$('.smt').click(function(){
$('.butt').fadeIn(1000);
});
