// IMPERATIVE APPROACH

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase();
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

// DECLARATIVE APPROACH
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

// FOR...OF LOOP

function pigLatin(str){
    const strArr = str.split('')
    const isVowel = /[a,e,o,u,i]/gi
    let result = str
    if(!strArr[0].match(isVowel)){
        for(let i = 0; i < strArr.length; i++){
            if(!strArr[i].match(isVowel)){
                result = result.slice(1) + strArr[i]
            }
            else {
                result = result + 'ay'
                console.log(result)
                return result
            }
        }
    } else {
        return result + 'way'
    }
}