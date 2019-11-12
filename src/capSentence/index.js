// pick a solution and insert here to run the test.

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    
    let capsArray = wordsArray.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase())
    })
  
    return capsArray.join(' ')
  }

  module.exports = capSentence;
  