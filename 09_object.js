let student={
firstName:"satyavan",
lastName:"Shejal",
isWorking:true,
age:26,
collegeName:"ABC",
id:123456
};
console.log(student);
console.log(typeof student);
// .Dot Notation
console.log(student.firstName);
// [] Notation
console.log(student["lastName"]);
//Update Property
student.collegeName="COEP PUNE";
console.log(student.age);
//Add new property city="Mumbai";
student.city="Mumbai";
console.log(student);
// console.table(student);
delete student.isWorking;
console.table(student);
//Empty Object
let teacher={}