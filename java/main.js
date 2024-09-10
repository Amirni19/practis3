'use strict';

let a = prompt('Введите стоимость товара', );
let b = prompt('Введите ваше количество денег', );
if(a < 0 || b < 0){
    alert('Нельзя вводить отрицательные числа!');
}
else if(a > b){
    let c = a - b;
    alert('Для покупки вам не хватает ' + c + ' р.');
}
else if(a < b){
    let d = b - a;
    alert('Сдача ' + d + 'р.');
}

let a = prompt('Напишите число',);
if(a > 0){
    alert('Значение 1',);
}
else if(a < 0){
    alert('Значение -1',);
}
else if(a == 0){
    alert('Значение 0',);
}

let a = prompt('Введите число');
let b = prompt('Введите число');
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

let message = prompt('Введите текст', String);
let message1 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

let login = prompt('Введите логин', );
if(login == 'Админ'){
    let password = prompt('Введите пароль', );
}
else{
    alert('Я вас не знаю')
}
if(password == 'Я главный'){
    alert('Здравствуйте');
}
else{
    alert('Неверный пароль');
}