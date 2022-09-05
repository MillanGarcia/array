var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
for(var i = 0; i < 10; i++){ //primer proceso en el que a vale 0 y se aplica...
    var a=0;            //...el primer numero generado aleatoriamente entre el 1 y el 20
    var loopEnd = Math.floor(Math.random() * 100 + 1);
    for (var j = 0; j < loopEnd; j++) { //dentro de cada proceso, se inicia uno nuevo,
//que tendra como Loop final,el valor aleatorio,y cada vez que este proceso se repita, se incrementará el valor de a       
        a++;
    }
    arr.push(a);
}
console.log(arr);
//arr.push(a);
//*****************
