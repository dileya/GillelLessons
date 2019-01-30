//Задание 1

var resultsNumber = prompt('Enter the number of results');

function random (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

   }

function stringGenerator () {
   
      var min = +prompt('Enter the min number of letters');
      var max = +prompt('Enter the max number of letters');
      obj= {};
      for ( var i=0; i < resultsNumber; i++) {
      var stringSize = random(min, max);
      var randomString = '';
      for (var j = 0; j < stringSize; j++) {
      var currentTemplate = 'abcdefghijklmnopqrstuvwxyz';
      randomString += currentTemplate[random(min, max)];
      }
      var newArr = [randomString];
      console.log(newArr);
      if (!obj[stringSize]) {
        obj[stringSize] = [];
    }
      obj[stringSize].push(newArr);
    }
      return obj;

}
const result = stringGenerator();
console.log(obj);

//Задание 2

var arr = [1, 2, 3, 4];
var act = prompt('enter the number or the letters');

function fEach (arr) {
for ( var i=0; i< arr.length; i++){
console.log(act + i);
}
}

var result = fEach (arr);
console.log(result);
