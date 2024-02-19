// const tipCalculator = (sum, percentage, currency, prefix) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;

//   if (prefix) {
//     console.log(`
//     Sum before tip: ${currency}${sum}
//     Tip percentage: ${percentage}%
//     Tip:            ${currency}${tip.toFixed(2)}
//     Total:          ${currency}${total.toFixed(2)}
//   `);
//   } else {
//   }
//   console.log(`
//     Sum before tip: ${sum}${currency}
//     Tip percentage: ${percentage}%
//     Tip:            ${tip.toFixed(2)}${currency}
//     Total:         ${total.toFixed(2)}${currency}
//   `);
// };

// tipCalculator(29.95, 18, "$", false);

//Anothr Helper Function

const formatter = (locale, currency, someVaue) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(someVaue);
  return formattedValue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  console.log(`
      Sum before tip: ${currency}${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${currency}${formatter(locale, currency, tip)}
      Total:          ${currency}${formatter(locale, currency, total)}
    `);
};

tipCalculator(29.95, 18, "de-DE", "EUR");
