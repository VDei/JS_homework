let a,b,c,d,e,f,g,h;

//Задача_1
a = prompt('Enter your name');
alert('Hello, '+a+' !');
console.log('Num.1__________'+(' Hello, '+a+'!'));

//Задача_2
const y = 2020;
b = parseInt(prompt('Enter year you had born'));
alert(y-b);
console.log('Num.2__________'+(' You are '+(y-b)+' old.'));

//Задача_3
c = +prompt('Введите длинну стороны квадрата');
alert((c+c)*2);
console.log('Num.3__________'+(' P='+((c+c)*2)));

//Задача_4
d = parseFloat(prompt('Введите радиус'));
alert(3.14*(d**2));
console.log('Num.4__________'+(' S='+(3.14*(d**2))));

//Задача_5
e = parseFloat(prompt('Введите растояние между городами в километрах'));
f = parseFloat(prompt('Введите время за которое желаете добраться в часах'));
alert(e/f);
console.log('Num.5__________'+(' Должна быть скорость '+(e/f)+' км/час'));