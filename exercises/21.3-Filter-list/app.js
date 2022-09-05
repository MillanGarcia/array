let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];
//declare your function here
var newnames = [];

function filterByName(array){
    for(i=0;i<array.length;i++){
        if(array[i].includes('am') || array[i].includes('Am')){
            newnames.push(array[i]);
        }

    }
}
filterByName(names);
console.log(newnames);
