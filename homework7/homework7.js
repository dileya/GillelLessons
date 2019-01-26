//Задание 1
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