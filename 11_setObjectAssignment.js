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
const sbiBank=new Bank("SBI Bank","Mumbai","65897412","SBIN0000271","9%")
const iciciBank=new Bank("ICIIC Bank","Kolhapur","45657898","icici0000321","7%")
const kotakBank=new Bank("Kotak Bank","Solapur","12324565","kotak0000112","4%")
const hdfcBank=new Bank("HDFC Bank","sangali","789845632","hdfc0000452","5%")
const panjabBank=new Bank("PANJAB Bank","Panjab","0124563","panjab0000456","10%")

const setOfBanks =new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(panjabBank);

console.log(`............ Traversing using for of loop ..............`);
for (const bank of setOfBanks) {
    console.log(`Bank Name : ${bank.bankName} Bank Location : ${bank.location}`);
}