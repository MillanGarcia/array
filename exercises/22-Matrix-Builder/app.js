// Code goes here



function matrixBuilder(long){
    var array=[];
    
    for(let i=0;i<long;i++){    
        for (let j = 0; j < long; j++) {
            array[i][j].push(Math.floor(Math.random()+0.5));
        }    
    }
    return array;
}






// do not change anything from this line down
console.log(matrixBuilder(5))
