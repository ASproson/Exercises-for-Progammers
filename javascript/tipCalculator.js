"use strict";
// Create a simple tip calculator. The program should prompt
// for a bill amount and a tip rate. The program must compute
// the tip and then display both the tip and the total amount of the bill
// Round fractions up to two decimal places
// bill: 10
// tip: 15
// tip === 1.50, total === 11.50
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let promptBill: number;
// let promptTip: number;
const tipCalculator = (bill, tip) => {
    if (typeof bill !== "number" ||
        typeof tip !== "number" ||
        bill < 0 ||
        tip < 0) {
        return "Please enter a number";
    }
    return `Bill: ${bill}, Tip: ${tip}%, Total: ${bill + bill * (tip / 100)}`;
};
module.exports = tipCalculator;
// rl.question("What is the bill? ", function (bill: number) {
//   promptBill = bill;
//   rl.question(
//     "What is the tip percentage as a whole number? ",
//     function (tip: number) {
//       promptTip = tip;
//       console.log(tipCalculator(promptBill, promptTip));
//       rl.close();
//     }
//   );
// });
