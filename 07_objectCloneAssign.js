console.log(`................. step 1  Shallow clone ...............`);
const arrayNums=[20,3,4,56,90,400,49]
const clonedArray=arrayNums;
clonedArray.push(55,66);
console.log(`Orginal Array is: ${arrayNums}`);
console.log(`Cloned Array is : ${clonedArray}`);
console.log(`............step 2  Spread Operator {...} for deep clone ..............`);
const deepClone=[...arrayNums];
arrayNums.push(10,25)
console.log(`Orginal Array is: ${arrayNums}`);
console.log(`Cloned Array using spread operator is : ${deepClone}`);
console.log(`........... Step  3 ...............`);
const arrayEven=[2,30,14,8];
 const mergedAray =arrayNums.concat(arrayEven);
 console.log(mergedAray);
 console.log(`........... Step  4 ...............`);
 const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91 9096 5678 77"]
 }
 console.log(`5.1 Employee Details : ${employee_info.address.city} ${employee_info.address.state} ${employee_info.address.country}`);
console.log(`5.2 Mobile Numbers : ${employee_info.mobiles}`);
console.log(`Perform deep clone using Json.stringFy()`);
const clonedObject=JSON.parse(JSON.stringify(employee_info));
console.log(clonedObject);
console.log(`orginal salary of employeee==> ${clonedObject.salary.july_month}`);
clonedObject.salary.july_month="80K";
console.log(`salary of employeee after cloning ==> ${clonedObject.salary.july_month}`);
console.log(`Orginal Country Of Employee object is : ${employee_info.address.country}`);
employee_info.address.country="United Kingdom";
console.log(`country of employee after Cloning : ${employee_info.address.country}`);



