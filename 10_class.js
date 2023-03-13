class Bank{
    bankName
    location
    account
    ifsc
    inrestRate
    constructor(bankName,location,account,ifsc,inrestRate){
        this.bankName=bankName;
        this.location=location;
        this.account=account;
        this.ifsc=ifsc;
        this.inrestRate=inrestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.inrestRate}`);
    }
    
}

const sbiBank=new Bank("SBI Bank","PUNE","12345678","SBIN0000749","8%")

sbiBank.showDetails();

const axisBank=new Bank("Axis Bank","Solapur","87456123","AXIS000745","9%");

axisBank.showDetails();
class Person {
    fullName
    city
    constructor(fullName,city){
        this.fullName=fullName;
        this.city=city
    }
}
const personDhoni=new  Person("MS Dhoni","Chennai")
const personShubham=new  Person("Shubham Gill","Mumbai")
console.log( personDhoni instanceof Person);
console.log( personShubham instanceof Person);
console.log( sbiBank instanceof Bank);

