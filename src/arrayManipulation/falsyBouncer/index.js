// pick a solution and insert here to run the test.


function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)  
    })
}

module.exports = falsyBouncer;
