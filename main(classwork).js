//document.body.style.backgroundColor = "yellow";
/*
    Типи данних:

    number;     -числа
    string;     -текст
    boolean;    -true/false
    null;       -значення відсутнє
    undefined;  -неназначена змінна
*/


// const countDays = true;
// alert(typeof(countDays));

// alert(countDays);

// var age = 16;
// alert(age);

// let name = "Vitalii"; //let - оголошення змінної по новому. Забороняється починати змінну з цифри та використовувати пробіли і дефіз.
// alert(name);


//alert();
//let f = confirm('Do you like it?'); //Повертає значення true (Ок) або false(Отмена)
//alert(f);
//f?document.body.style.backgroundColor = 'green':document.body.style.backgroundColor = 'red'; //можна ще так f==true?document.body

// let name = prompt('enter name', 'Vitalii');
// console.log(name);
// name==null?document.body.style.backgroundColor = 'green':document.body.style.backgroundColor = 'red';

// 2+9*8-(2+6)/4;
// 1. ();
// 2. *,/;
// 3. +, -;
// % (остача від ділення);
// ** - підняття до степеня (метри квадратні);

// let a, b;
// a = +prompt('enter number 1'); //оператор ПЛЮС робить значення числовим
// b = +prompt('enter number 2');
// alert(a+b); // як варіант (+а+(+b))
// a = parseInt(prompt('enter number 1')); // parseInt введене значення заокруглюється
// b = parseFloat(prompt('enter number 2')); //parseFloat - не заокруглює
// alert(a+' + '+b+' = '+(a+b)); // відображає а+б=сума

// let a = 25;
// let b = a%2;
// alert(b);



//Оператори:

// 1. Унарний.
// a++; b--;   a++=a+1; b--=b-1;
// let a = 2;
// let b = 3;
// console.log(b+(++a));
// console.log(a);

// 2. Бінарний
// let a = 2;
// let b = 3;
// console.log(a+b);

// 3. Тернарний
// a?b:c;
// ?

// == (Рівність частин)
// >, >=, <, <= (більше/менше)
// != (Означає "НЕ дорівнює")

// let year = 2020;
// let yearPersone = +prompt('Enter year');
// let age = year - yearPersone;

//console.log(age);

// if(yearPersone==0){
//     alert('Cencel');
// }
// else if(yearPersone==""){
//     alert('Enter year');
// }
// else{
//     if(age>=18){
//     alert('Ok');
//     }
//     else if(age<18){
//         alert('You are too yong!');
//     }
//     else{
//         alert('Error');
//     }
// }


// && - об'єднують. &&=і
// || = або
// === сувора перевірка на відповідність

// let login, password;

// login = prompt('Who are you?');
// password = prompt('Password')

// if(login.toLowerCase() == 'admin' && password == 'shag'){
//     alert('Wellcome, '+'login!');
//     document.title = login;
// }
// else{
//     alert('Login or password wrong!');
// }

// if(login==null){
//     alert('Enter canceled');
// }
// else if(login.toLowerCase() == 'admin'){
//     password = prompt('Enter password');
//     if(password==null){
//         alert('Enter canceled');
//     }
//     else if(password=='shag'){
//         alert('Wellcome');
//     }
//     else{
//         alert('Wrong password');
//     }
// }
// else{
//     alert('I don`t know you! Go away!');
// }



// let day = +prompt('Enter number day');
// if(day == '1'){
//     alert("Monday");
// }
// else if(day == '2'){
//     alert("Tuesday");
// }
// else if(day == '3'){
//     alert("Wednesday");
// }
// else if(day == '4'){
//     alert("Thursday");
// }
// else if(day == '5'){
//     alert("Friday");
// }
// else if(day == '6'){
//     alert("Saturday");
// }
// else if(day == '7'){
//     alert("Sunday");
// }
// else{
//     alert('Error')
// }


// let temp = parseFloat(prompt('Enter your temp'));
// if(temp < '20' || temp > '46'){
//     document.write('You died!');
// }
// else if(temp >= '20' && temp <= '27'){
//     document.write('You are near to die!');
// }
// else if(temp > '27' && temp <= '36' || temp >= '37' && temp <= '42'){
//     document.write('You are ill!');
// }
// else if(temp >'36' && temp <'37'){
//     document.write('You fill good!');
// }
// else if(temp > '42' && temp <=46){
//     document.write('You fell down!');
// }
// else{
//     alert('Invalid temp');
// }

// let n = +prompt('Enter number');
// if(n >= '0' && n <= '20'){
//     document.write('Number is in [0,20]');
// }
// else if (n <0 || n>20){
//     document.write('Number isn`t in [0,20]');
// }
// else{
//     alert('Enter number correct!');
// }

// let w = +prompt('Enter number 1 or 2');
// if(w == '1'){
//     let uah = +prompt('Enter money in uah');
//     let curs = parseFloat(prompt('Enter course uah/usd'));
//     alert(uah/curs);
// }
// else if(w == '2'){
//     let dol = +prompt('Enter money in usd');
//     let curs = parseFloat(prompt('Enter course uah/usd'));
//     alert(curs*dol);
// }
// else{
//     alert('Enter number only 1 or 2');
// }

// let s = prompt('Enter your sex (mr ore ms)');
// let a = +prompt('Enter your age');

// if(s == 'mr' && a >= '65'){
//     alert('You are grandpa!');
// }
// else if(s == 'ms' && a >= '55'){
//     alert('You are grandma!');
// }
// else if(a <= '0' && a >= '150'){
//     alert('Invalid age!')
// }
// else if(s != 'ms' || s != 'mr'){
//     alert('Enter sex only as "mr" or "ms"!');
// }
// else{
//     alert('You are yong!')
// }