const array=[2,3,4,5,9]
console.log(`Even index element in the array `);
array.forEach((element,index) => {
    if (index%2==0) {
        console.log(element);
    }
});