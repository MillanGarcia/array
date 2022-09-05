

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]



// Your code here function getParkingLotState
function getParkingLotState(array){
  var c=0;
  var o=0;
  var n=0;
        for(i=0;i<array.length;i++){
          for(j=0;j<array.length;j++){
            if(array[i][j]===0){
              c++;
            }else if(array[i][j]===1){
               o++;
            }else {
               n++;
            }
          }
        }
   var state={
          totalSlots: o+n,
          availableSlots: n,
          occupiedSlots: o
        }
    console.log(state);
}
//no entiendo el valor undefined al final
console.log(getParkingLotState(parking_state))