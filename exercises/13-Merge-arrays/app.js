var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    //your code here
    //let newArray = firstArray.concat(secondArray);// funciona
    var i=0
    do {
        newArray.push(firstArray[i]);
        i++;
    } while (i<firstArray.length);
    j=0;
    do {
        newArray.push(secondArray[j]);
        j++;
    } while (j<secondArray.length);
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));