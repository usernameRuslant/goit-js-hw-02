//==========================================================================================================================
// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".
//==========================================================================================================================
function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
      return `"Shipping to ${country} will cost ${price} credits"`;
    case 'Chile':
      price = 250;
      return `"Shipping to ${country} will cost ${price} credits"`;
    case 'Australia':
      price = 170;
      return `"Shipping to ${country} will cost ${price} credits"`;
    case 'Jamaica':
      price = 120;
      return `"Shipping to ${country} will cost ${price} credits"`;
    default:
      return `"Sorry, there is no delivery to your country"`;
  }
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
