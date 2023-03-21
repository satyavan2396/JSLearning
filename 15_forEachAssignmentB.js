class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    
    }
    }
    const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
    const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
    const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
    const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
    const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
    const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
    const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
    
    const array_employees= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
    numberOfEmployee=array_employees.length;
console.log(`1.Find out the "TCS" employees details and log only name & company on console.`);

array_employees.forEach(employee => {
   if (employee.emp_company=="TCS") {
    console.log(employee.emp_name,employee.emp_company);
   }
});

console.log(`2.Find the employees with salary greater than or equal 50000(Log the all Employees details on console).`);

array_employees.forEach(employee => {
    if (employee.emp_salary>=50000) {
        console.log(employee.emp_id,employee.emp_name,employee.emp_dept,employee.emp_salary,employee.emp_company);
    }
});

console.log(`3.Find the sum of all employees salary and log on console.`);
let sum=0;
array_employees.forEach(employee => {
    sum=sum + employee.emp_salary;
});
console.log(`Sum of all Employees Salary is : ${sum}`);

console.log(`4.Find the average salary and log on console(Average=Total Salary/number of employee).`);
 let average;
average=sum/numberOfEmployee;
console.log(`Average salary is : ${average}`);

console.log(`5.Find the "IT" OR "HR" department employees whose salary is greater than or eqaul to 75000 and log complete employee detail on console.`);

array_employees.forEach(employee => {
    if (employee.emp_dept=="IT" || employee.emp_dept=="HR") {
        if (employee.emp_salary>=75000) {
            console.log(employee.emp_id,employee.emp_name,employee.emp_dept,employee.emp_salary,employee.emp_company);
        }
    }
});

