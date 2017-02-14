jQuery(document).ready(function() {
  var galLit = function(gal) {
  return gal * 3.785411784;
  }
  var litGal = function(lit) {
    return lit * 0.26417205;
  }
  var lit = prompt("How many liters");


  alert(litGal(lit) + " gallons");
});
