// pick a solution and insert here to run the test.


function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc);
}

module.exports = reverseString
