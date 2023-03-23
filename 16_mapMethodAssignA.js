const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log(`1.Add 10 into each element and log new array on console`);
const newArray=[];
arrayNumbers.map((currentValue)=>{
newArray.push(currentValue+10)
});
console.log(newArray);

console.log(`2.square the each array element and log on console`);
const newSquareArray=[];
arrayNumbers.map((currentValue)=>{
    newSquareArray.push(currentValue*currentValue)
})
console.log(newSquareArray);

console.log(`Add the index value into its corresponding each array element and log new array result on console`);
const newIndexValueAddedArray=[];
arrayNumbers.map((currentValue,index)=>{
    newIndexValueAddedArray.push(index+currentValue)
});
console.log(newIndexValueAddedArray);