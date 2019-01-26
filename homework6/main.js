
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
/*for (var number = prompt("Enter a number"), quantity = prompt("Enter the quantity"), i = 0;
     i <= quantity;
     i++) {
    var result = [i * +number];
    if (!(i % +number)) continue;
    console.log(result);
}*/

/*var key = prompt('Enter the key');
var definition = prompt('Enter the definition');
var obj = {};
obj[key] = definition;
console.log (obj);*/

function random() {
    var randomString = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++)
    randomString += alphabet.charAt(Math.floor(Math.random() * (alphabet.length -1)));
    return randomString;
}
for (var number = +prompt("Enter the number of results"),
         max = +prompt('Enter the max'),
         min = +prompt('Enter the min'), i = 0; 
         i < number;
         i++) {
    var newArr = random();
    var stringSize = (max + min) / 2;
    var lastArr = newArr.split('', stringSize);
    var result = [lastArr].join('');
    var obj = {[stringSize] : [result]};
    console.log(result);
    if (number === i) break;
}
alert(number + ' words with ' + stringSize + ' characters');
console.log(obj);

/*
for (var number = +prompt("Enter the number of results", result; result <= number;  )
)
/*
    if (newArr.length > stringSize) {
    newArr.length = stringSize;
    }*/


/*var string = "abcdefghijklmnopqrstuvwxyz";
var number = '3';
var arr = string.split('', number);
console.log (arr);*/
