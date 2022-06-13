export function generatePalindromeNumbers(first: number, last: number): Array<number> {

    const startInterval = first < last ? first : last;
    const lastInterval = first < last ? last : first;

    let palindromeValues: Array<number> = Array();

    for (let value: number = startInterval; value <= lastInterval; value++)
        if (verifyPalindrome(value)) palindromeValues.push(parseInt(<any>value));

    return palindromeValues;
}

export function verifyPalindrome(value: number): boolean {
    const absoluteValue = Math.abs(value);
    const reverseValue = absoluteValue.toString().split('').reverse().join('')
    const isPalindrome = reverseValue == absoluteValue.toString() && absoluteValue.toString().length > 1 ? true : false;

    return isPalindrome;
}