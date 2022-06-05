alert(`Урок завершено`);
let tovar_price = prompt(`Яка ціна товару?`);
let garanty_price = prompt(`Яка ціна гарантії?`);
let dostav_price =  prompt(`Яка ціна достaвки?`);
let product = prompt (`Який продукт бажаєте придбати?`);
let imya = prompt(`Як вас звати`);
let rik = 1;
let kilkict = 3;
let suma = tovar_price + garanty_price + dostav_price
console.log(suma);
let suma2 = tovar_price * kilkict + garanty_price * kilkict + dostav_price
console.log(`Вітаю,${imya}! Ваше замовлення:

${product} за ціною - ${tovar_price}грн у кількості ${kilkict} штук
Гарантія на ${rik} рік вартістю - ${garanty_price} грн у кількості ${kilkict} штук
Вартість доставки - ${dostav_price} грн

Прийнято та буде оброблено протягом 24 години.

Загальна вартість замовлення - ${suma2} грн`);

