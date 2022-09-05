// Add your code here
function lyricsGenerator(array){
    var counter=0;
    var newArray=[];
    for(i=0;i<array.length;i++){
        if(array[i]===0){
            newArray.push("Boom");
        }else if(array[i]===1 && counter!==2){
            newArray.push("Drop the base");
            counter++;
        }
        else if(array[i]===1 && counter==2){
            newArray.push("Drop the base");
            newArray.push("¡¡¡Break the base!!!");
        }
    }
    console.log(newArray);
    console.log(counter)
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))