function clock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds
  var time = hours + ':' + minutes + ':' + seconds;
  return time;
}

var div = document.createElement('div');
div.className = "clock";
document.body.appendChild(div);
setInterval(function(){
  div.innerHTML = clock();
  alarm();
}, 1000);

function Task(title, description, startDate, endDate) {
  this.title = title,
  this.description = description,
  this.startDate = startDate;
  this.endDate = endDate;
}
Task.prototype = alarm;

var taskOne = new Task('Задача №1', 'Выучить английский',new Date(2019, 2, 4, 1, 15, 0),new Date(2019, 0, 31, 21, 00, 0));
var taskTwo = new Task('Задача №2', 'Выучить прототипы', new Date(2019, 2, 4, 1, 16, 0),new Date(2019, 0, 31, 21, 45, 0));
var taskThree = new Task('Задача №3', 'Полежать :)', new Date(2019, 2, 4, 1, 17, 0), new Date(2019, 0, 31, 22, 30, 0));

function alarm () {
var currentDate = new Date();
if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskOne.startDate.getTime() / 1000)) {
  var displayOne = document.createElement('p');
  displayOne.className = 'taskOne';
  document.body.appendChild(displayOne);
  displayOne.textContent = JSON.stringify(taskOne);
}

if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskTwo.startDate.getTime() / 1000)) {
  var displayTwo = document.createElement('p');
  displayTwo.className = 'taskTwo';
  document.body.appendChild(displayTwo);
  displayTwo.innerHTML = JSON.stringify(taskTwo);
}

if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskThree.startDate.getTime() / 1000)) {
  var displayThree = document.createElement('p');
  displayThree.className = 'taskThree';
  document.body.appendChild(displayThree);
  displayThree.innerHTML = JSON.stringify(taskThree);
}
}


