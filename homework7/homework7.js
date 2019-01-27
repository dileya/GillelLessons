//Задание 1
function random() {
    var randomString = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < alphabet.length; i++)
    randomString += alphabet.charAt(Math.floor(Math.random() * (alphabet.length -1)));
    return randomString;
}
function size(min, max) {
    var randomSize = (Math.round(Math.random() * (max - min) + min));
    return randomSize;
}
var obj = {};
for (var number = +prompt("Enter the number of results"),
         max = +prompt('Enter the max'),
         min = +prompt('Enter the min'), i = 0;
         i < number;
         i++) {
    var newArr = random();
    var stringSize = size(min, max);
    var lastArr = newArr.split('', stringSize);
    var result = lastArr.join('');
    if (!obj[stringSize]) {
        obj[stringSize] = [];
    }
    obj[stringSize].push(result);
    console.log(obj);
    console.log(result);
    alert('1 word with ' + stringSize + ' characters');
    if (number === i) break;
}
console.log(obj);
