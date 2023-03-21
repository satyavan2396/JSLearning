const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log(`1.log the array element with its index using foreach() with arrow function`);
arrayNumbers.forEach((element,index) => {
    console.log(`Index value is :${index} value is : ${element}`);
});

console.log(`2. Find the positive number and log on console`);

arrayNumbers.forEach(element => {
    if (element>0) {
        console.log(`Positive Number is :${element}`);
    }
});

console.log(`3. Find the Negative number, add into new array and  log new array on console using arrow function`);

let newArray=[]
arrayNumbers.forEach(element => {
    if (element<0) {
        newArray=newArray+element;
    }
});
console.log(`Negative number from array is:${newArray}`);

console.log(`4. Find the even number and log on console using foreach() arrow function`);
arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`Even Number is :${element}`);
    }
});

console.log(`5. Find the sum of all elements from arrayNumbers log on sum value on console using foreach() `);
let sum=0;
arrayNumbers.forEach(element => {
    sum=sum+element;
});
console.log(`Sum of element from arrayNumber is :${sum}`);

console.log(`6. Log the only even indexed array value on console foreach() with arrow function prefred `);

arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`Even indexed value is :${element}`);
    }
});
