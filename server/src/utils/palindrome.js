"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPalindrome = exports.generatePalindromeNumbers = void 0;
function generatePalindromeNumbers(first, last) {
    const startInterval = first < last ? first : last;
    const lastInterval = first < last ? last : first;
    let palindromeValues = Array();
    for (let value = startInterval; value <= lastInterval; value++)
        if (verifyPalindrome(value))
            palindromeValues.push(parseInt(value));
    return palindromeValues;
}
exports.generatePalindromeNumbers = generatePalindromeNumbers;
function verifyPalindrome(value) {
    const absoluteValue = Math.abs(value);
    const reverseValue = absoluteValue.toString().split('').reverse().join('');
    const isPalindrome = reverseValue == absoluteValue.toString() && absoluteValue.toString().length > 1 ? true : false;
    return isPalindrome;
}
exports.verifyPalindrome = verifyPalindrome;
