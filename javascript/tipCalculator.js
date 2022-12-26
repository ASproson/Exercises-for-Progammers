"use strict";
// Create a simple tip calculator. The program should prompt
// for a bill amount and a tip rate. The program must compute
// the tip and then display both the tip and the total amount of the bill
// Round fractions up to two decimal places
// bill: 10
// tip: 15
// tip === 1.50, total === 11.50
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let promptBill;
let promptTip;
const tipCalculator = (bill, tip) => {
    return "ri";
};
rl.question("What is the bill? ", function (bill) {
    promptBill = bill;
    rl.question("What is the tip percentage as a whole number? ", function (tip) {
        promptTip = tip;
        console.log(tipCalculator(promptBill, promptTip));
        rl.close();
    });
});
module.exports = tipCalculator;
