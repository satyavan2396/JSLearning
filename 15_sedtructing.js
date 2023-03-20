let student={
    firstName:"satyavan",
    lastName:"shejal",
    isWorking:true,
    age:27,
    collegeName:"ABC",
    id:123456,
   
}
let {firstName,lastName,isWorking,age,collegeName,id,city="Pune"} = student;// Object destructing
console.log(`Extracting values from object is : First Name:${firstName} isworking : ${isWorking} age : ${age} collegeName:${collegeName} city: ${city}`);

const array=[5,6,7,8];
 let [num1,num2,num3,num4,num5=0,num6]=array;
 console.log(num1,num2,num3,num4,num5,num6);