import { tipCalculator } from "./tipCalculator";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let promptBill: number;
let promptTip: number;

rl.question("What is the bill? ", function (bill: number) {
  promptBill = bill;
  rl.question(
    "What is the tip percentage as a whole number? ",
    function (tip: number) {
      promptTip = tip;
      console.log(tipCalculator(promptBill, promptTip));
      rl.close();
    }
  );
});
