// pick a solution and insert here to run the test.

function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return Array.from(new Set([...jointArray]))
}

module.exports =  mergeArrays;
