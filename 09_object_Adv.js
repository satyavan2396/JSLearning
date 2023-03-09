
console.log(`.........................To traverseObject..............`);
const employee={
    id:124567,
    name:"Elon Mask",
    country:"US",
    city:"Silicon Valley"
}
console.log(`========================= In operator =======================`);
const isIdAvailabble= "id" in employee;
console.log(isIdAvailabble);
for (const key in employee) {
    
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
       console.log(key,element);
    }
}
const keyOfEmployee=Object.keys(employee);//we can access key of object in the froom of array
console.log(keyOfEmployee);

const valuesOfEmployee=Object.values(employee);//we can access key of object in the froom of array
console.log(valuesOfEmployee);

const entriesOEmployee=Object.entries(employee);// we can access values in the from of array
console.log(entriesOEmployee);
console.log(entriesOEmployee[0]);// we can access property of an object in the from ofarray
