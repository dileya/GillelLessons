/*
Написать скрипт, который будет выводить часы на экран. 
Предварительно создать несколько тасок. 
В случае, если время для данной таски пришло - вывести ее название в документе 
В документе можно вывести с помощью команды document.body.innerText = 'Your text!'; */
function alarm() {
  var currentDate = new Date();
  var startDate = new Date(2019, 31, 01, 01, 36, 0);
  console.log(currentDate);
  console.log(startDate);
if (Math.floor(startDate.getDate() / 1000) === Math.floor(currentDate.getDate() / 1000))

return alert('Task №1 should be done!')
}
alarm();

/*function newTask(title, description, startDate, endDate) {
  var startDate = new Date();
  var endDate = new Date();
  startDate.setHours(15, 30, 15);
  endDate.setHours(19, 30, 15);
  return {
    title : 'Задача №1',
    description : 'Выучить английский',
    start : startDate,
    end : endDate
  }
}
console.log(newTask());

function otherTask(title, description, startDate, endDate) {
  var startDate = new Date();
  var endDate = new Date();
  startDate.setHours(22, 45, 15, 0);
  endDate.setHours(21, 30, 15, 0);
  return {
    title : 'Задача №2',
    description : 'Выучить прототипы',
    start : startDate,
    end : endDate
  }
}
console.log(otherTask());

function anotherTask(title, description, startDate, endDate) {
  var startDate = new Date();
  var endDate = new Date();
  endDate.setDate(startDate.getDate() + 1);
  return {
    title : 'Задача №3',
    description : 'Полежать :)',
    start : startDate,
    end : endDate
  }
}
console.log(anotherTask());*/
