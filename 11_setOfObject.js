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
const axisBank=new Bank("Axis Bank","Solapur","87456123","AXIS000745","9%");
const yesBank=new Bank("Yes Bank","Kolhapur","12345678","Yes0000789","8%")
const hdfcBank=new Bank("hdfc Bank","sangola","87456123","HDFC000078945","9%");

const setOfBanks=new Set();
setOfBanks.add(sbiBank);
setOfBanks.add(axisBank);
setOfBanks.add(yesBank);
setOfBanks.add(hdfcBank);
for (const bank of setOfBanks) {
    console.log(bank.bankName);
}
