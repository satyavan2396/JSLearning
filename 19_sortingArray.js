
const arrayOfNames=["Elon","Ratan","Billigates","PT Usha","Murmu"]
console.log(arrayOfNames);
console.log(`...........After Sorting ...................`);
const sortedArray= arrayOfNames.sort();
console.log(sortedArray);
console.log(`...................Sorting Array numbers...............`);
const array=[5,6,3,44,104,302,15]
console.log(array);

///custom sorting to sort element in asendind order
array.sort((a,b)=>{
    return a>b ? 1 : -1;
});
console.log(array);
//custom sorting to sort element in descending  order
const arrayNum=[56,3,4,78,23,32]
arrayNum.sort((a,b)=>{
    return a>b ?-1 :1;
})
console.log(arrayNum);
