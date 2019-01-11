var age = prompt('Enter your age');
var emptySpace = null;
console.log(age);
if (age >= 18) {
	alert('access granted');
}
else if(age < 12 ) {
		alert('You should visit other service');
	}
else if(age <= 18 ) {
	alert('access declined');
}
else  {
	alert('Error, enter your age!');
}
   
var age = prompt('Enter your age');
var experience = prompt('Enter your experience in years');
var language = prompt('Do you know English? Enter "yes" or "no"');
var positive = 'yes';
var test = prompt('Write the resut : 10+15+25/5 = ?');
if (age >= 30 && experience >= 3 && language == positive && test == 30 ) {
	alert('You are hired! Congratulations!')
} else if (age < 30 || experience < 3 || language != positive || test != 30 ) {
	alert('Sorry, we cannot hire you :(')
}

alert('You can convert your money only in hrivnas');
var euro = 'eur';
var dollar = 'usd';
var rubli = 'rub';
var hrivna = 'hrn';
var money = prompt('Choose the currency you want to change -  eur or usd or rub');
console.log(money);
var theSum = prompt('Enter the sum you want to change');
console.log(theSum);
switch (money) {
case 'eur':
alert(theSum * 33 + ' hrn');
break;
case 'usd':
alert(theSum * 28 + ' hrn');
break;
case 'rub':
alert(theSum * 0,4 + ' hrn');
break;
}