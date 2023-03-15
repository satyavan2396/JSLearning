const mapOfNums= new Map();
mapOfNums.set("One",1);
mapOfNums.set("Two",2);
mapOfNums.set("Three",3);
mapOfNums.set("One",1);
mapOfNums.set("Four",4);
mapOfNums.set("Two",2);
console.log(mapOfNums.size);
console.log(mapOfNums);
console.log(mapOfNums.get("Two"));
console.log(mapOfNums.get("One"));
mapOfNums.delete("Two");
console.log(`After Delete`,mapOfNums);
console.log(mapOfNums.has("Two"));

const keyOfMap=mapOfNums.keys();
console.log(keyOfMap);

const valuesOfMap=mapOfNums.values();
console.log(valuesOfMap);

for (const key of keyOfMap) {
    console.log( key,mapOfNums.get(key));
}