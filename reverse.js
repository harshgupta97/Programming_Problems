// Using arrow function 
const reverse = number => {
    // Checking for numbber
    if (typeof number != 'number') throw new Error('Only number please');

    // Split it, reverse it, join it
    console.log(number.toString().split('').reverse().join(''));
}

reverse(4578);