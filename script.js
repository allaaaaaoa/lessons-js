'use strict'

let title = prompt('Как называется ваш проект?', 'jhg');
let screens = prompt('Какие типы экранов нужно разработать?', 'dfgfd');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 'sdghd');

let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = 4765;

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'hghgf');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'jhgf');

let servicePrice1 = +prompt('Сколько это будет стоить?', '3456');
let servicePrice2 = +prompt('Сколько это будет стоить?', '3456');

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

var fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);

let servicePercentPrice = fullPrice-rollback;
console.log(servicePercentPrice);

const getRollbackMassage = function(price){
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price <= 30000 ) {
        return "Даем скидку в 5%"
    } else if (price <= 15000 && price >= 0 ) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    };
}


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMassage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

//урок4

//1

let allServicePrices
const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};

//2

function getFullPrice(){
    return screenPrice + allServicePrices;
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice()
console.log(fullPrice);

//3

function getTitle(){
    return title.charAt(0).toUpperCase() + title.slice(1).toLocaleLowerCase();
};

title = getTitle();
console.log(title);

//4

function getServicePercentPrices(){
    return fullPrice - rollback;
};

//5



