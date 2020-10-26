// Using arrow function 
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