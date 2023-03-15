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

const mapOfBanks = new Map();
mapOfBanks.set("SBI_11",sbiBank);
mapOfBanks.set("axis_22",axisBank);
mapOfBanks.set("yes_33",yesBank);
mapOfBanks.set("hdfc_44",hdfcBank);
const element= mapOfBanks.get("yes_33")

 const keyOfMaps = mapOfBanks.keys();
 for (const key of keyOfMaps) {
    const element=mapOfBanks.get(key);
    console.log(key,element);
 }