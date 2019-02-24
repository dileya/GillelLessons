
// Создать пустой массив, в котором будут храниться объекты военных ресурсов ( солдат, лошадей, машин ).
// Задача: Написать функцию, аргументами которой будут служить свойства
// будущего ресурса ( название, количество единиц жизни, максимальное количество единиц жизни,
// дистанцию, которую может пройти ресурс в сутки всего,
// дистанцию, которую он может пройти на данный момент ).

const squadUnitsCount = 10;
const typesOfResourses = ['Soldier', 'Horse', 'Car'];

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomType() {
  return typesOfResourses[Math.round(Math.random() * (typesOfResourses.length - 1))];
}

function Squad() {
  this.units = [];
  for (let i = 0; i < squadUnitsCount; i++) {
    let unit = new Resource(randomType() + " №" + i, random(0, 100), random(100, 110), random(80, 100), random(30, 100));
    unit.isReadyToMove();
    this.units.push(unit);
  }
}

function Resource(type, healthRate, maxHealthRate, distancePerDay, movedDistance) {
  this.type = type;
  this.healthRate = healthRate;
  this.maxHealthRate = maxHealthRate;
  this.distancePerDay = distancePerDay;
  this.movedDistance = movedDistance;
  this.distancePerMoment = this.distancePerDay - this.movedDistance;
}
// Написать функцию, аргументом которой будет число - дистанция, которую следует пройти ресурсу в день. 
// Функция должна пересчитать уже пройденную дистанцию каждой единицы и, 
// в случае, если больше она пройти не сможет, выдать ошибку. 

Resource.prototype.isReadyToMove = function () {
  if (this.distancePerMoment <= 0) {
    console.error('No more distance is requared for ' + this.type)
  }
};

//Написать функцию, которая будет увеличивать здоровье каждой единицы до максимально возможного.
// Доступен один опциональный аргумент, который указывает на индекс объекта в массиве. 
// В данном случае лечится только одна единица. 

Resource.prototype.restore = function () {
  this.healthRate = this.maxHealthRate;
  console.log(this.type + ' was treated');
}
Squad.prototype.restore = function (index) {
  for (let i = 0; i < this.units.length; i++) {
    let unit = this.units[i];
    if (index === i)
      unit.restore()
  }
}

///  Написать такую же функцию, только для отдыха ( увеличиваем доступную дистанцию )

Resource.prototype.restoreDistance = function () {
  this.movedDistance = 0;
  console.log(this.type + ' distance was restored');
}
Squad.prototype.restoreDistance = function (index) {
  for (let i = 0; i < this.units.length; i++) {
    let unit = this.units[i];
    if (index === i)
      unit.restoreDistance()
  }
}

var squadOne = new Squad();
var squadTwo = new Squad();
console.log(squadOne);
squadOne.restore(2);
squadOne.restoreDistance(3);
console.log(squadOne);

//Написать функцию, которая возвращает массив ресурсов, которые могут пройти 
// указанную в аргументе дистанцию 

Squad.prototype.isReadyToMove = function (distance) {
  let unit = this.units;
  var newUnit = unit.filter(function(item) {
    return item.distancePerMoment > distance;
  });
  return newUnit;
}

console.log(squadOne.isReadyToMove(25));

// Написать функцию, аргументом которой является массив других единиц. 
// Функция должна объединить текущий массив с указанным в аргументе 

Squad.prototype.combineResource = function(army) {
  let unit = this.units;
  var newSquad = unit.concat(army);
  return newSquad;
}

console.log(squadOne.combineResource(squadTwo.units));


// Написать функцию проверки на готовность каждой единицы выступить в бой. 
// Аргументом служит минимальное количество урона, который можно получить в бою 

Squad.prototype.isReadyToFight = function(damage) {
  var unit = this.units;
  var areReady = unit.filter(function(item) {
  return (item.maxHealthRate - item.healthRate) >= damage;
  });
 return areReady;
}

console.log(squadOne.isReadyToFight(20));

// Написать функцию перестроения объектов. 
// Первый аргумент - индекс первого объекта, второй - второго. 


Squad.prototype.sort = function (indexOne, indexTwo) {
  let tmp = this.units[indexOne]
  this.units[indexOne] = this.units[indexTwo];
  this.units[indexTwo] = tmp;
  return this;
}
console.log(squadOne.sort(3, 4));


//Написать функцию клонирования объекта по получению его ссылки, либо индекса в массиве. 

Squad.prototype.clone = function (index) {
  var army = this.units;
  var clone = {};
  for (let i = 0; i < this.units.length; i++) {
    var unit = this.units[i];
    if (index === i)
    for (var key in unit) {
      clone[key] = unit[key];
    }
  }
  army.push(clone);
  return army;
}

console.log(squadOne.clone(3));
