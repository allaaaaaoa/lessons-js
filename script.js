
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');

let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = 4765;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice1 = +prompt('Сколько это будет стоить?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);

let servicePercentPrice = fullPrice-rollback;
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
    console.log ('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000 ) {
    console.log  ('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0 ) {
    console.log  ('Скидка не предусмотрена');
} else {
    console.log ('Что то пошло не так');
}

