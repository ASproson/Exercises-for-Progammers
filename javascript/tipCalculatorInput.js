"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tipCalculator_1 = require("./tipCalculator");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let promptBill;
let promptTip;
rl.question("What is the bill? ", function (bill) {
    promptBill = bill;
    rl.question("What is the tip percentage as a whole number? ", function (tip) {
        promptTip = tip;
        console.log((0, tipCalculator_1.tipCalculator)(promptBill, promptTip));
        rl.close();
    });
});
