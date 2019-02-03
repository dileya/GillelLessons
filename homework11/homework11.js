//Интерактивные часы выведены на экран скриптом, написанным в index.html
function Task(title, description, startDate, endDate) {
  this.title = title,
  this.description = description,
  this.startDate = startDate;
  this.endDate = endDate;
}
Task.prototype = alarm;

function alarm(currentDate) {

var currentDate = new Date();
var taskOne = new Task('Задача №1', 'Выучить английский',new Date(2019, 1, 3, 22, 36, 0),new Date(2019, 0, 31, 21, 00, 0));
var taskTwo = new Task('Задача №2', 'Выучить прототипы', new Date(2019, 1, 3, 22, 30, 0),new Date(2019, 0, 31, 21, 45, 0));
var taskThree = new Task('Задача №3', 'Полежать :)', new Date(2019, 1, 3, 22, 31, 0), new Date(2019, 0, 31, 22, 30, 0));


 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskOne.startDate.getTime() / 1000)) {
  var a = alert('TaskOne should be done!'); 
  console.log(taskOne);
 }
 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskTwo.startDate.getTime() / 1000)) {
  var a = alert('TaskTwo should be done!'); 
  console.log(taskTwo);
 }
 if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskThree.startDate.getTime() / 1000)) {
  var a = alert('TaskThree should be done!'); 
  console.log(taskThree);
 }
}
  var result = setInterval(function() {
    alarm();
    }, 1000);

