
/*array1.forEach(function(element) {
  console.log(element + 10);
});*/

var arr = [1, 2, 3, 4];
var act = prompt('enter the number or the letters');

function fEach (arr) {
for ( var i=0; i< arr.length; i++){
console.log(act + i);
}
}

var result = fEach (arr);
console.log(result);