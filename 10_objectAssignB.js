const sbiBank={
    bankName:"SBI",
    accountNo:74578965412,
    ifscCode:"SBIN0000749",
    branchCode:"Sangola",
}
console.log(`Bank Details:bankName: ${sbiBank.bankName} AccountNo: ${sbiBank.accountNo} Bank Ifsc Code: ${sbiBank.ifscCode} Bank Branch: ${sbiBank.branchCode}`);
 const bankLocation={
    street:"solapur",
    city:"sangola",
    pinCode:413307
 }
 console.log(`Bank Location : Street of bank: ${bankLocation.street} City of Bank : ${bankLocation.city} Bank Pincode:   ${bankLocation.pinCode}`);
 console.log(`......................Cloning two object sbiBank and bankLocation using assign Object.assign().................`);
const mergedObject= Object.assign({},sbiBank,bankLocation)
console.table(mergedObject);

 console.log(`................spread operator{...} .......................`);
 const bank={...sbiBank}
 console.log(sbiBank,bank);

 const location={...bankLocation}
 console.log(bankLocation,location);
 console.log(`..............step4.........................`);
  const rateOfIntrest={
    homeLoanIntrest:"8%",
    personLoanIntrest:"12%",
    dueIntrest:"4%"


  }
 const sbiDetails=Object.assign({},sbiBank,bankLocation,rateOfIntrest)
 console.log(`Bank details:${sbiDetails.bankName} ${sbiDetails.accountNo} ${sbiDetails.ifscCode} ${sbiDetails.branchCode} ${sbiDetails.street} ${sbiDetails.city} ${sbiDetails.pinCode} ${sbiDetails.homeLoanIntrest} ${sbiDetails.personLoanIntrest} ${sbiDetails.dueIntrest}`);

 console.log(`.........Traversing using for in loop..........`);
 for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(key,element);
    }
 }