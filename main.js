var curr1 = 0;
var curr2 = 0;
var curr3 = 0;
var curr4 = 0;
var curr5 = 0;
var incr = 1;

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
    
    $('#firstBar').value=curr1;
    $('#secondBar').value=curr2;
    $('#thirdBar').value=curr3;
    $('#fourthBar').value=curr4;
    $('#fifthBar').value=curr5;
  });
  
