// Using arrow function 

/**
 * @description Reverse the given number
 * @param {number} number to be reversed
 * @return Return reverse number 1234 -> 4321
 */
const reverseInt = number => {
    // Checking for number
    isNumber(number);

    // Split it, reverse it, join it
    console.log(number.toString().split('').reverse().join(''));
}

function isNumber(number) {
    if (typeof number != 'number')
        throw new Error('Only number please');
}

reverseInt(4578);