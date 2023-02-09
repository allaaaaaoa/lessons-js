const title = "Курс js";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = "30000";
const rollback = Math.ceil(Math.random()*100);
const fullPrice = "50000";
const adaptive = true || false;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов", screenPrice, "рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта", fullPrice, "рублей/ долларов/гривен/юани");
console.log(fullPrice * (rollback/100));

alert ("bzzzzzzzzzz");