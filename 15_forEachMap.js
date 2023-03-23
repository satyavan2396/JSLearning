const mapOfNums= new Map();
mapOfNums.set("One",1);
mapOfNums.set("Two",2);
mapOfNums.set("Three",3);
mapOfNums.set("One",1);
mapOfNums.set("Four",4);
mapOfNums.set("Two",2);

mapOfNums.forEach((key,value) => {
    console.log(key,value);
});