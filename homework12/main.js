function Developer(id, name, surname, salary, technology) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.technology = technology;
  this.isOccupied = false;
}

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var tech = ['Js', 'Java', 'C++', 'Php', 'Html', 'Swift', 'Scala'];

function randomType() {
  return tech[Math.round(Math.random() * (tech.length - 1))];
}

var staff = [];
for (var i = 0; i < 10; i++) {
  staff.push(
    new Developer(
      i + 1,
      'User' + i,
      'UserSurname' + i,
      random(1000, 5000),
      randomType()
    )
  );
}
console.log(staff);
function AccountantInfo(developer) {
  return {
    name: developer.name + ' ' + developer.surname,
    tax: Math.round(developer.salary * .05)
  }
}
for (let i in staff) {
  console.log(AccountantInfo(staff[i]));

}

function Resume(employee) {
  this.name = employee.name;
  this.surname = employee.surname;
  this.position = employee.technology;
}
Resume.prototype.greeting = function () {
  alert(`Hello! My name's ${this.name} ${this.surname}. I would like to work in your company on this position ${this.position}.`);
}

function PositionInfo(employee, level, maxSalary) {
  this.profLevel = level;
  this.basicSalary = employee.salary;
  this.maxSalary = maxSalary;
}