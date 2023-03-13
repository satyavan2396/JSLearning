console.log(`....................Function Constructor Assignment......................`);
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    console.log(`Bank Details is: ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
}
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
const yesBank= new Bank("Yes Bank","Pune","YES0000785","456");
console.log(`open Time For SBI Bank is :${yesBank.openTime} and Close Time Is :${yesBank.closeTime}`);
const sbiBank= new Bank("State Bank of India","Mumbai","SBIN0000749","554");
console.log(`open Time For SBI Bank is :${sbiBank.openTime} and Close Time Is :${sbiBank.closeTime}`);
const mahBank= new Bank("Maharashtra Bank","Solapur","MAH0000456","789");
const axisBank= new Bank("Axis Bank","Sangali","axis0000223","654");
console.log(`open Time For SBI Bank is :${axisBank.openTime} and Close Time Is :${axisBank.closeTime}`);

