var grn = prompt('Enter the sum in Hrivnas');
console.log (grn);
confirm ('The currency is 1$ = 28.5 hrn')
var result = grn * 28.5;
console.log (result);


var n = prompt('Enter a number');
console.log(n);
var m = prompt('Enter other number');
console.log(m);
var result = Number(n) + Number(m);
console.log(result);
var final = (result / 2);
alert ('Result is ' + final);




var arr = prompt('Enter numbers using a comma as a separator');
console.log(n);
arr = arr.split(',');
console.log(arr);
function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (Object.prototype.toString.call(array[i]) === '[object Number]') {
			sum += array[i];
		}
	}
	return sum
}
console.log(arraySum(arr));
console.log(average);
alert(average);