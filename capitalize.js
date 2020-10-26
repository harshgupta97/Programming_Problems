/**
 * @description Converting the first alphabet of every word to UPPERCASE in a string
 * @param {*} string passing a string
 */
function capitalize(string) {
    // Checking for string
    isString(string);

    // Split string and store it in an array
    let words = string.toLowerCase().split(' ');

    // Loop
    for (let i = 0; i < words.length; i++) words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    // Now we join the newString array with a little space and return it.
    console.log(words.join(' '));
}

function isString(string) {
    if (typeof string != 'string')
        throw new Error('Only string please');
}

capitalize('look, it is working!');