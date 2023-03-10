
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

const player={
    fullName:"Rohit Sharama",
    totalCenturies:46,
    isMarried:true,
}
Object.freeze(player);
player.totalWicket=120;//Adding new Property Not allowed
delete player.totalCenturies// Deleting not alloewed
player.fullName="King Rohit Sharama";//
console.log(player);//Update Existing Property-Not Allowed Due to Object.freeze () 

const studenet={
    firstName:"Elon",
    lastName:"Mask",
    age:54,
}
const adddesss={
    country:"US",
    city:"Sillicon Valley",
    pin:"QA2345",

}
//First Way
const mergedObject=Object.assign({},studenet,adddesss)
console.table(mergedObject);
//Second Way
const newObject={}
Object.assign(newObject,studenet,adddesss)
console.table(newObject);
//ThirdWay
Object.assign(studenet,adddesss)
console.table(studenet);
//Fourth Way
Object.assign(adddesss,studenet)
console.table(adddesss);