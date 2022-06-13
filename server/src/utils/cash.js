"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseIsValid = exports.cashAmount = void 0;
function cashAmount(purchase, payment) {
    const returnedValue = payment - purchase;
    const isValid = purchaseIsValid(returnedValue);
    if (!isValid)
        return {
            'error': true,
            'message': 'the payment value is not enough'
        };
    const countNotes = {};
    countNotes.oneAmount = returnedValue % 10;
    countNotes.tenAmount = ((returnedValue % 100) - countNotes.oneAmount) / 10;
    countNotes.hundredAmount = (returnedValue - (countNotes.oneAmount + countNotes.tenAmount * 10)) / 100;
    return countNotes;
}
exports.cashAmount = cashAmount;
function purchaseIsValid(returnedValue) {
    const isValid = returnedValue >= 0 ? true : false;
    return isValid;
}
exports.purchaseIsValid = purchaseIsValid;
