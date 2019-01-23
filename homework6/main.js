
/*var number = prompt('Enter the number from 1 to 10');
var randomNumber = Math.round (Math.random * 10);
var result = confirm('Do you want to try again?');
while () {
    var result = confirm('Do you want to try again?');
    if (!result)  break;
}
while (number === randomNumber) {
    alert('You win!');
}*/
/*var randomNumber = Math.round (Math.random() * 10);
console.log(randomNumber);
function n () {
    return prompt('Enter the number from 1 to 10');
}
var result;
for (var number = n ();
+number !== randomNumber; 
number = n()) {
    result = confirm('Do you want to try again?');
    if (!result) break;
}
if (+number === randomNumber) {
    alert('You win!');
}*/

//Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.
for (var number = prompt("Enter a number"), quantity = prompt("Enter the quantity"), i = 0;
     i <= quantity;
     i++) {
    var result = [i * +number];
    if (!(i % +number)) continue;
    console.log(result);
}
