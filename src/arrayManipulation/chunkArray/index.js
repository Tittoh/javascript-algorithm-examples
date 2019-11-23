// pick a solution and insert here to run the test.

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

module.exports = chunkArray;
