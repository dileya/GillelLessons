function Developer(id, name, surname, salary, technology) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.technology = technology;
    this.isOccupied = false;
  }
  function random (min, max) {
    return Math.round(Math.random() * (max-min) + min);
  }

var tech = ['Js', 'Java', 'C++', 'Php', 'Html', 'Swift', 'Scala'];
function randomType () {
    return tech[Math.round(Math.random() * (tech.length - 1))];
  }

var staff = [];
  for (var i=0; i < 10; i++) {
    staff.push(
      new Developer(
        i + 1,
        'User' + i,
        'UserSurname' + i,
        random(1000, 5000),
        randomType ()
      )
    );
  }
console.log(staff);
function Company () {
  this.staff = [];
}
console.log(Company());

function AccountantInfo (user) {
this.name = user.name + ' ' + user.surname;
this.salary= user.salary;
this.tax  = Math.round(user.salary * 0.5);
}
var accInfo = new AccountantInfo(staff);
console.log(accInfo);





