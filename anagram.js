function checkAnagram(stringOne, stringTwo) {

    isString(stringOne, stringTwo);

    const finalStringOne = sanitizeString(stringOne);
    const finalStringTwo = sanitizeString(stringTwo);

    checkStringLength(finalStringOne, finalStringTwo);

    console.log(isAnagram(finalStringOne, finalStringTwo));
}

function isString(s1, s2) {
    if (typeof s1 != 'string' && typeof s2 != 'string')
        throw new Error('Only string please');
}

function checkStringLength(finalString1, finalString2) {
    if (finalString1.length !== finalString2.length)
        throw new Error('Not An Anagram');
}

function sanitizeString(dirtyString) {
    // regex to remove spaces
    let stringToSanitize = dirtyString;
    stringToSanitize = stringToSanitize.replace(/\s/g, '');

    // regex to remove special char
    const sanitizedString = stringToSanitize.replace(/[^\w\s]/gi, '');
    // const sanitizedString = dirtyString.replace(/[^\w\s]/gi, '');
    console.log('sanatized ' + sanitizedString);
    return sanitizedString;
}

function isAnagram(finalStringOne, finalStringTwo) {
    return finalStringOne.toLowerCase().split('').sort().join('') === finalStringTwo.toLowerCase().split('').sort().join('');
}

// Change input here and run using node
checkAnagram("RAIL SAFETY", "fairytales");
