const arrayNums=["Anil","Sunil","sita","Bill","Elon"];
const result= arrayNums.join(":")
console.log(result);
console.log(typeof result);
console.log(arrayNums.length);
console.log(`............. Resize an array ..............`);
arrayNums.length=3;
console.log(arrayNums.length);
console.log(arrayNums);

arrayNums.length=7;
console.log(arrayNums.length);
console.table(arrayNums);
const array=[3,4,5,6,7,2,4,5];
const setOfElemnets= new Set();
for (const element of array) {
    setOfElemnets.add(element)
}
console.table(setOfElemnets);

const myset= [... new Set(array)]
console.table(myset);

