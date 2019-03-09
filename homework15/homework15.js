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
timer.appendChild(div);
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

var taskOne = new Task('Задача №1', 'Выучить английский',new Date(2019, 2, 9, 21, 41, 0),new Date(2019, 2, 6, 21, 00, 0));
var taskTwo = new Task('Задача №2', 'Выучить прототипы', new Date(2019, 2, 9, 21, 45, 0),new Date(2019, 2, 6, 21, 45, 0));
var taskThree = new Task('Задача №3', 'Полежать :)', new Date(2019, 2, 9, 21, 49, 0), new Date(2019, 2, 6, 22, 30, 0));

var displayOne = document.createElement('p');
displayOne.id = 'tOne';
soon.appendChild(displayOne);
displayOne.textContent = JSON.stringify(taskOne);
var closerOne = document.createElement('span');
closerOne.id = 'closeOne';
closerOne.innerHTML = 'X';
tOne.appendChild(closerOne);

var displayTwo = document.createElement('p');
displayTwo.id = 'tTwo';
soon.appendChild(displayTwo);
displayTwo.innerHTML = JSON.stringify(taskTwo);
var closerTwo = document.createElement('span');
closerTwo.id = 'closeTwo';
closerTwo.innerHTML = 'X';
tTwo.appendChild(closerTwo);

var displayThree = document.createElement('p');
displayThree.id = 'tThree';
soon.appendChild(displayThree);
displayThree.innerHTML = JSON.stringify(taskThree);
var closerThree = document.createElement('span');
closerThree.id = 'closeThree';
closerThree.innerHTML = 'X';
tThree.appendChild(closerThree);


document.getElementById("closeOne").addEventListener("click", function () {
  document.getElementById("tOne").style.display = "none";
});

document.getElementById("closeTwo").addEventListener("click", function () {
  document.getElementById("tTwo").style.display = "none";
});

document.getElementById("closeThree").addEventListener("click", function () {
  document.getElementById("tThree").style.display = "none";
});

function alarm () {
var currentDate = new Date();

if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskOne.startDate.getTime() / 1000)) {
  now.appendChild(displayOne);
}
if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskTwo.startDate.getTime() / 1000)) {
  now.appendChild(displayTwo);
}
if (Math.floor(currentDate.getTime() / 1000) === Math.floor(taskThree.startDate.getTime() / 1000)) {
  now.appendChild(displayThree);
}
}



