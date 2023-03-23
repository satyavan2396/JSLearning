const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`1.Find out all the numbers which are greater than 50 and log of console`);
const NewArray= arrayNumbers.filter((element)=>{
    return element>50;
})
console.log(`The number which are greter than 50 is: ${NewArray}`);
console.log(`=======================================================================`);
console.log(`2.Find out the even number log of console`);
const evenElement= arrayNumbers.filter((element)=>{
    return element%2==0;
})
console.log(`Even element array is :${evenElement}`);
console.log(`=======================================================================`);

console.log(`3.Find out the all Odd number log of console`);
const oddNumberArray= arrayNumbers.filter((element)=>{
    return element%2!=0;
})
console.log(`Odd number from given array is : ${oddNumberArray}`);
console.log(`=======================================================================`);

console.log(`4.Find out the all which are multiple of 5 log of console`);
const multipleOf5= arrayNumbers.filter((element)=>{
     return element%5==0;
})
console.log(`The number which are multiple of 5 is :${multipleOf5}`);
console.log(`=======================================================================`);

console.log(`5.Find out all numbers which are between 20 and 50 log of console`);
const elementBetween20and50= arrayNumbers.filter((element)=>{
    return element>20&&element<50;
})
console.log(`Element between 20 and 50 is : ${elementBetween20and50}`);
console.log(`=============================== Thank You =======================================`);


