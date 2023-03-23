class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const employeesArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`1.Find out all the employee sfrom "TCS" using filter() and then the Final array result log comany name & employee Name on console`);
const tcsEmp= employeesArray.filter((element)=>{
    return element.emp_company=="TCS";
})
tcsEmp.forEach((element)=>{
    console.log(`Comany Name : ${element.emp_company} and Employee Name is :${element.emp_name}`); 
})
console.log(`=====================================================================`);
console.log(`2. Find the average salary of employee from company wipro`);


const wiproEmp= employeesArray.filter((employee)=>{
    return employee.emp_company=="Wipro";
})
let totalSalary=0;
wiproEmp.forEach((element)=>{
    totalSalary=totalSalary+element.emp_salary;
})
const average=totalSalary/wiproEmp.length
console.log(`Average Salary of Wipro Employee is : ${average}`);
console.log(`=====================================================================`);
console.log(`3. Find the average salary of employee from company wipro and Infy`);

const wiproAndInfyEmployee= employeesArray.filter((element)=>{
    return element.emp_company=="Wipro" || element.emp_company=="Infy";
})
let sumOfWiproAndInfy=0;
wiproAndInfyEmployee.forEach((element)=>{
    sumOfWiproAndInfy=sumOfWiproAndInfy+element.emp_salary;
})
const averageSalary=sumOfWiproAndInfy/wiproAndInfyEmployee.length
console.log(`Average salary of Wipro and Infy Employee is : ${averageSalary}`);

