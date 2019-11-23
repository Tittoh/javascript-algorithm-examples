// pick a solution and insert here to run the test.


function palindromeChecker(text) {
    var textLen = text.length;
    for (var i = 0; i < textLen / 2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromeChecker;
