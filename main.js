var curr1 = 0;
var curr2 = 0;
var curr3 = 0;
var curr4 = 0;
var curr5 = 0;
var incr = 1;
var fillers = 0;

var bar1 = document.getElementById('firstBar');
var bar2 = document.getElementById('secondBar');
var bar3 = document.getElementById('thirdBar');
var bar4 = document.getElementById('fourthBar');
var bar5 = document.getElementById('fifthBar');

$('#fill').on('click', function () {
  curr1 = curr1 + incr;
});

$('#buyFiller').on('click',function() {
  fillers++;
  curr2-=fillerCost;
  fillerCost++;
  document.getElementById('buyFiller').text("Buy an Auto Filler - " + fillerCost);
});

$('#buyIncr').on('click',function() {
  incr++;
  curr2-=incrCost;
  incrCost++;
  document.getElementById('buyIncr').text("Improve Clicker - " + incrCost);
});

window.setInterval(function() {
  curr1+=fillers;
  if (curr1 >= 7) {
    curr2 += 1;
    curr1 = 0;};
  if (curr2 == 49) {
    curr3 += 1;
    curr2 = 0;};
  if (curr3 == 343) {
    curr4 += 1;
    curr3 = 0;};
  if (curr4 == 2401) {
    curr5 += 1;
    curr4 = 0;};
    
    bar1.value = curr1;
    bar2.value = curr2;
    bar3.value = curr3;
    bar4.value = curr4;
    bar5.value = curr5;
  },100);
  
