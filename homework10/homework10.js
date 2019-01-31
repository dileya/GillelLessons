//Интерактивные часы вывеены на экран скриптом, написанным в index.html

function alarm(currentDate, startDateOne, startDateTwo, startDateThree) {

var currentDate = new Date();
var startDateOne = new Date(2019, 0, 31, 20, 7, 0);
var startDateTwo = new Date(2019, 0, 31, 20, 8, 0);
var startDateThree = new Date(2019, 0, 31, 20, 9, 0);

 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(startDateOne.getTime() / 1000)) {
  var a = alert('TaskOne should be done!'); 
  console.log(taskOne());
 }
 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(startDateTwo.getTime() / 1000)) {
  var a = alert('TaskTwo should be done!'); 
  console.log(taskTwo());
 }
 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(startDateThree.getTime() / 1000)) {
  var a = alert('TaskThree should be done!'); 
  console.log(taskThree());
 }
}
  var result = setInterval(function() {
    alarm();
    }, 1000);

function taskOne() {
  var endDate = new Date(2019, 0, 31, 21, 00, 0);
  return {
    title : 'Задача №1',
    description : 'Выучить английский',
    end : endDate
  }
}

function taskTwo() {
  var endDate = new Date(2019, 0, 31, 21, 45, 0);
  return {
    title : 'Задача №2',
    description : 'Выучить прототипы',
    end : endDate
  }
}

function taskThree() {
  var endDate = new Date(2019, 0, 31, 22, 30, 0);
  return {
    title : 'Задача №3',
    description : 'Полежать :)',
    end : endDate
  }
}
