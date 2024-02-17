// JavaScript code​​​​​​‌​‌​‌​‌‌‌‌​​​​​​‌‌‌​​​​​‌ below
// Write your answer here, then test your code.

const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {
  const totals = {};
  // Add together all values from the prices array
  totals.beforeTax = prices.reduce((a, b) => a + b, 0);

  // Your code starts here

  // Your code ends here

  return totals;
};

const showTotals = (prices) => {
  const totals = calculateTotal(prices);
  return `
        Before tax: $${totals.beforeTax.toFixed(2)}
        GST: $${totals.GST.toFixed(2)}
        PST: $${totals.PST.toFixed(2)}
        -----------------
        Sum total: $${totals.sum.toFixed(2)}
    `;
};

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
// Nested array of random prices
const pricesArr = [
  [2.5, 9.99, 3.99, 18.59, 49.96],
  [2.99, 3.99, 4.99, 5.99, 6.99],
  [100.99, 200.99, 300.99, 400.99, 500.99],
  [1.99, -2.99, 3.99, -4.99, 5.99],
];

// Pick random array of prices
const randomPrices = Math.floor(Math.random() * pricesArr.length);
console.log(randomPrices);

const result = showTotals(pricesArr[randomPrices]);
