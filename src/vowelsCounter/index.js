// pick a solution and insert here to run the test.


function vowelsCounter(text) {
    // Search text with Regex and store all matching instances
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}

module.exports = vowelsCounter;
