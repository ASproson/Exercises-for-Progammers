"use strict";
// Create a simple tip calculator. The program should prompt
// for a bill amount and a tip rate. The program must compute
// the tip and then display both the tip and the total amount of the bill
// Round fractions up to two decimal places
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipCalculator = void 0;
const tipCalculator = (bill, tip) => {
    if (typeof bill !== "number" ||
        typeof tip !== "number" ||
        bill < 0 ||
        tip < 0) {
        return "Please enter a number";
    }
    return `Bill: ${bill}, Tip: ${tip}%, Total: ${bill + bill * (tip / 100)}`;
};
exports.tipCalculator = tipCalculator;
module.exports = exports.tipCalculator;
