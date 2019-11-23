// pick a solution and insert here to run the test.


function isAnagram(stringA, stringB) {

    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    return sanitizeString(stringA) == sanitizeString(stringB)

}

module.exports = isAnagram;
