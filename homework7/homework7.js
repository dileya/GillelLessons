//Задание 1
var userIsHappy = 0;
while (userIsHappy<10) {
    alert('Are you happy what ' + userIsHappy++ + ' is?');
};

var userIsHappy = 0;
do {
    alert('Are you happy what ' + userIsHappy++ + ' is?');
}
while (userIsHappy<10);

//Задание 2
var randomNumber = Math.round (Math.random() * 10);
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
}

//Задание 3
for (var number = prompt("Enter a number"), i = 1; i % +number; i++) {
    var result = i * +number;
    if (!(i % +number)) continue;
    console.log(result);
}

//Задание 4
for (var number = prompt("Enter a number"), quantity = prompt("Enter the quantity"), i = 0;
     i <= quantity;
     i++) {
    var result = [i * +number];
    if (!(i % +number)) continue;
    console.log(result);
}


