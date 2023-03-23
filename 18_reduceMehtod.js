
const array=[3,4,5,8,90,50,1,44,78,51]
let sumOfArrayElement= array.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(sumOfArrayElement);

//Find the Even Number From given array and sum it

let arrayEven =array.filter((currentValue)=>{
    return currentValue%2==0;
})
console.log(arrayEven);

let sumEven =arrayEven.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(sumEven);