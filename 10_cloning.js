const Person={
    fullName:"Ms Dhoni",
    age:26
}
const Player=Person;
// Player.fullName="Captaion Cool";
console.log(Player);
console.log(Person);
console.log(`Deep Clone using spread operator`);
const newPlayer={...Person}//deep cloning using spread operator
console.log(newPlayer);
newPlayer.age=48;
console.log(`newPlayer===>${newPlayer.fullName} ${newPlayer.age}`);
console.log(`Person===>${Person.fullName} ${Person.age}`);

const student={
    fullName:"Virat Kohali",
    age:33,
    address:{
        street:"AS CLUB",
        city:"Pune",
        pin:431202
    }
}
const newStudent={...student}//deep Clone using spread operator for nested object
newStudent.fullName="king kohali";
newStudent.address.city="Mumbai";
console.log(`newStudent==>${newStudent.address.city}`);
console.log(`student==> ${student.address.city}`);

console.log(`newStudent==>${newStudent.fullName}`);
console.log(`student==> ${student.fullName}`);

console.log(`deep clone using spread String.json()`);
const bank={
    bankName:"SBI Bank",
    accountNo:3456789,
    bankAddress:{
        city:"Bangolre",
        PIN:5556677
    }
}
const newBank=JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN=9999999;
console.log(`bank===> ${bank.bankAddress.PIN}`);
console.log(`newBank==> ${newBank.bankAddress.PIN}`);