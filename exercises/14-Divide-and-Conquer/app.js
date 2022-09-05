let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (firstArray) => {
    
    let odd=[];
    let even=[];
    
    //your code here
    //let newArray = firstArray.concat(secondArray);// funciona
    var i=0
    var j=0
    do {
        if(firstArray[i]%2!==0){
        odd.push(firstArray[i]);
        }
        i++;
    } while (i<firstArray.length);
    //porque he tenido que hacer dos bucles do while? no he podido en uno solo
    do {
        if(firstArray[j]%2===0){
        even.push(firstArray[j]);
        }
        j++;
    } while (j<firstArray.length);
    let newArray=odd.concat(even);
    return newArray
    
}

console.log(mergeTwoList(list_of_numbers))
