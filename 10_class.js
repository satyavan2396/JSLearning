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
}
const sbiBank=new Bank("SBI Bank","PUNE","12345678","SBIN0000749","8%")
console.log(sbiBank);

const axisBank=new Bank("Axis Bank","Solapur","87456123","AXIS000745","9%");
console.log(axisBank);