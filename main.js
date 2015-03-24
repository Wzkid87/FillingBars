var curr1 = 0;
var curr2 = 0;
var curr3 = 0;
var curr4 = 0;
var curr5 = 0;
var incr = 1;

var bar1 = document.getElementById('firstBar');
var bar2 = document.getElementById('secondBar');
var bar3 = document.getElementById('thirdBar');
var bar4 = document.getElementById('fourthBar');
var bar5 = document.getElementById('fifthbar');

$('#fill').on('click', function () {
  curr1 = curr1 + incr;
  if (curr1 == 10) {
    curr2 += 1;
    curr1 = 0;};
  if (curr2 == 100) {
    curr3 += 1;
    curr2 = 0;};
  if (curr3 == 1000) {
    curr4 += 1;
    curr3 = 0;};
  if (curr4 == 10000) {
    curr5 += 1;
    curr4 = 0;};
    
    bar1.value = curr1;
    bar2.value = curr2;
    bar3.value = curr3;
    bar4.value = curr4;
    bar5.value = curr5;
  });
  
