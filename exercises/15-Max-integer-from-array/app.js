var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];


function findMax(array){
    var counter=0;
    for(i=0;i<array.length;i++){
        if(counter<array[i]){
            counter=array[i];
        }
    }
    return counter;
}
console.log(findMax(myArray));
