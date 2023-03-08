const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`1.Total Elements Available in Given Array is : ${arrayNumbers.length}`);
console.log(`...................................................................................`);
console.log(`2.First Element of Given Array is : ${arrayNumbers[0]} and Last Element is : ${arrayNumbers[10]}`); 
console.log(`...................................................................................`);
const thirdElement= arrayNumbers.length-3;
console.log(`3.Third last Element of Given Array is : ${arrayNumbers[8]}`); 
console.log(`...................................................................................`);
console.log(` Given Array Even No. is:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
        
    }
    
}
console.log(` Given Array odd No. is:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
    
}
console.log(`.............................................................................`);
let sumOfEven=0;
for (let index = 0; index<arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
   sumOfEven=element+sumOfEven;
   }
console.log(`6.Sum of All even Positioned Element of given array is :${sumOfEven}`);
console.log(`.............................................................................`);
let sumOfOdd=0;
for (let index = 1; index<arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
   sumOfOdd=element+sumOfOdd;
   }
console.log(`7.Sum of All odd Positioned Element of given array is :${sumOfOdd}`);
console.log(`.............................................................................`);
let totalSum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    totalSum=totalSum+element;

    
}
console.log(`8.The Sum of all element of given array is :${totalSum}`);
console.log(`..................9. Multiply of 5 are .............................`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(`Multiple of 5 are : ${element}`);
        
    }
    
}
console.log(`.........................................................................`);
const isNumber115= arrayNumbers.includes(115);
console.log(`10.Is Number 115 is available or Not In given array : ${isNumber115}`);

console.log(`.........................................................................`);
const isNumber23= arrayNumbers.includes(23);
console.log(`11.Is Number 115 is available or Not In given array : ${isNumber23}`);

console.log(`.........................................................................`);
console.log(`Given array is : ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(`12.After adding element 55, 66 the array is :${arrayNumbers}`);

console.log(`.........................................................................`);
console.log(`Given array is : ${arrayNumbers}`);
arrayNumbers.splice(4,3);
console.log(`13.After Deleting 3 element starting from index 4 the array is :${arrayNumbers}`);

console.log(`**************************** Thank You ********************************`);






