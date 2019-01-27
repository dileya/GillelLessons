//Задание 1
function exchange (from, to) {
    var from = prompt('Enter the sum in dollars');
    confirm ('The currency is 1$ = 28.5 hrn')
    var to = 28.5;
    return from * to
  }
 alert(exchange() + ' grn');


 //Задание 2
 function exchange (from, to) {
    var from = prompt('Enter the sum in dollars');
    confirm ('The currency is 1$ = 28.5 hrn')
    var to = 28.5;
    return from * to
  }

 var func = function (result) {
     var result = exchange ();
     return result;
 }
 alert(func() + ' grn');