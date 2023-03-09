let student={
firstName:"satyavan",
lastName:"Shejal",
isWorking:true,
age:26,
collegeName:"ABC",
id:123456,
address:  {//we can add object as key
    street:"Wakad",
    city:"Pune",
    pin:"431204"
},
school:"PoddaeSchool",
friends:["Bill","Sterw","Elon"],
show:function(){
    console.log(`I am Show function`);
},
addressDetails: function(){
    return`street is:${this.address.street},city is: ${this.address.city},pin is : ${this.address.pin}`
}
};
student.marks={//We can add object as property 
    math:80,
    phy:70,
    drawing:50
}
let res=student.addressDetails();
console.log(res);
student.show();
console.log(student.friends[student.friends.length-1]); 
console.log(student.marks);
student.address.pin="431205";
console.log(student.address.city);
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