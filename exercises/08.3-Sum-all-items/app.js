function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
	for(i=0;i<4;i++){
		total+=theArray[i];
	}

	return total;
}
console.log(sumTheElements([2,13,34,5]));