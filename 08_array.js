var arrayOfNumbers=[0,2,4,5,8,4,0,8]
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers)

const totalArrayElements= arrayOfNumbers.length;
console.log(`Total Numbers of Elements present in arrayOfNumbers is : ${totalArrayElements}`);

const is8available=arrayOfNumbers.includes(8);
console.log(`Is 8 is Available :${is8available}`);

const is9available=arrayOfNumbers.includes(9);
console.log(`Is 9 is Available :${is9available}`);

const indexOf8= arrayOfNumbers.indexOf(8);
console.log(`Indexof 8 element is :${indexOf8}`);

const indexOf100= arrayOfNumbers.indexOf(100);
console.log(`Indexof 100 element is :${indexOf100}`);

var arrayOfNumbers=[10,20,25,15,38,5]
const valueAtIndex2= arrayOfNumbers[2]
console.log(`Value at Index 2 is :${valueAtIndex2}`);

arrayOfNumbers[3]=35;
console.log(arrayOfNumbers);
arrayOfNumbers[1]=50;
console.log(arrayOfNumbers);
console.log(`========Adding Element in the last using push() method=======`);
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log(`========Adding Element in the starting using unshift() method=======`);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers=[10,20,25,15,38,5]
console.log(`========Remove Element in the last using pop() method=======`);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

console.log(`========Remove Element in the First using shift() method=======`);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers=[10,20,25,15,30,5,40,45]
console.log(`=======slice(statrtIndex)======`);
const arrayFromIndex3= arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);
console.log(`=======slice(statrtIndex,EndIndex)======`);//Return subarray
const subArray=arrayOfNumbers.slice(2,5);
console.log(subArray);

var arrayOfNumbers=[10,20,25,15,40,45]
console.log(`=======splice(statrtIndex)======`);
const spliceArray= arrayOfNumbers.splice(3);
console.log(`Removed Element From Array is :  ${spliceArray}`);
console.log(arrayOfNumbers);

var arrayOfNumbers=[10,20,25,15,40,45]
console.log(`=======splice(statrtIndex)======`);
const splicedArrayWithDeleteCount= arrayOfNumbers.splice(2,2);
console.log(splicedArrayWithDeleteCount);
console.log(arrayOfNumbers);
console.log(`....splice() to insert one element without replacing existing element`);
arrayOfNumbers.splice(2,0,22)
console.log(arrayOfNumbers);

console.log(`....splice() to insert multiply element without replacing existing element`);
arrayOfNumbers.splice(4,0,5,35,55)
console.log(arrayOfNumbers);

console.log(`==============Array Traversing==============`);
var arrayOfNumbers=[10,20,25,15,40,45,60,40,30,22,26]
let sum=0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    sum=sum+element;
    console.log(element);
    
}
console.log(`Sum of array Element is : ${sum}`);