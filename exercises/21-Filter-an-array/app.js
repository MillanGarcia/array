let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
var resultingNames = allNames.filter(function(name){
    if(name.startsWith("R")){
        return name;
    }
});
console.log(resultingNames);