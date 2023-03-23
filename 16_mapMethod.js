

const array=[3,4,5,6,1]
//[3,4,5,6,1]// transform array

const transFormArray=[];
array.forEach(currentValue => {
    transFormArray.push(currentValue);
});

console.log(transFormArray);

console.log(`Using map()`);
const arrayNew = array.map((element)=>{
       return element+2;
})
console.log(arrayNew);

const arrayOfNames=["Rupesh Dhumal","Rutuja Pawar","Nayan","Pralhad"]

const arrayNamesTransformed = arrayOfNames.map((element)=>{
    return element.length;
})
console.log(arrayNamesTransformed);