//==========================================================================================================================
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
//==========================================================================================================================
function checkForSpam(message) {
  // const cM = message.toLowerCase();
  // console.log(cM);
  // if (cM.includes('spam')) {
  //   return true;
  // } else if (cM.includes('sale')) {
  //   return true;
  // } else {
  //   return false;
  // }
  //2
  const cM = message.toLowerCase();
  return cM.includes('spam') || cM.includes('sale');
  //3
  // return (
  //   message.toLowerCase().includes('spam') ||
  //   message.toLowerCase().includes('sale')
  // );
}
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[ SPAM] How to earn fast money?'));
