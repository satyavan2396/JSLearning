class Bank{
    bankName
    location
    accountNo
    ifsc
    intrestRate
    constructor(bankName,location,accountNo,ifsc,intrestRate){
            this.bankName=bankName;
            this.location=location;
            this.accountNo=accountNo;
            this.ifsc=ifsc;
            this.intrestRate=intrestRate;
    }
}
const axisBank=new Bank("Axis Bank","Pune","748545","axis0000412","6%")
const sbiBank=new Bank("SBI Bank","Mumbai","658974","SBIN0000271","9%")
const iciciBank=new Bank("ICIIC Bank","Kolhapur","456578","icici0000321","7%")
const kotakBank=new Bank("Kotak Bank","Solapur","123245","kotak0000112","4%")
const hdfcBank=new Bank("HDFC Bank","sangali","789845","hdfc0000452","5%")
const panjabBank=new Bank("PANJAB Bank","Panjab","012456","panjab0000456","10%")

const mapOfBanks = new Map();
mapOfBanks.set("748545",axisBank);
mapOfBanks.set("658974",sbiBank);
mapOfBanks.set("456578",iciciBank);
mapOfBanks.set("123245",kotakBank);
mapOfBanks.set("789845",hdfcBank);
mapOfBanks.set("012456",panjabBank);

console.log(`............. Traverse map using for Of loop .................`);
const keyOfMap=mapOfBanks.keys();

for (const key of keyOfMap) {
    const element=mapOfBanks.get(key)
    console.log(`Bank Name: ${element.bankName} accountNo: ${element.accountNo} Intrest Rate: ${element.intrestRate}`);
}