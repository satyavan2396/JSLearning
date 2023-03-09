const sbiBank={
bankName:"State Bank Of India",
location:"Sangola",
accountNo:"0749 1056 2233",
ifsc:"SBIN0000749",
intrestRate:"8%",
showDetails:function(){
    console.log(`................................SBI Bank Detail.........................`);
    console.log(`Bank Name:${sbiBank.bankName},location:${sbiBank.location},Account No:${sbiBank.accountNo},Ifsc Code :${sbiBank.ifsc},Intrest Rate :${sbiBank.intrestRate}`);
}
};
const axisBank={
    bankName:"Axis Bank",
    location:"CS No 2976/5 shree complex station Road sangola tal-sangola Dist-Solapur Maharashtra 413307",
    accountNo:"0748 1057 2234",
    ifsc:"UTIB0003816",
    intrestRate:"9%",
    showDetails:function(){
        console.log(`................................AXIS Bank Detail.........................`);
        console.log(`Bank Name:${axisBank.bankName},location:${axisBank.location},Account No:${axisBank.accountNo},Ifsc Code :${axisBank.ifsc},Intrest Rate :${axisBank.intrestRate}`);
    }
};
const hdfcBank={
    bankName:"HDFC Bank",
    location:"Dnyaneshwar Complex Miraj Road sangola tal-sangola Dist-Solapur Maharashtra 413307",
    accountNo:"0748 1057 2234",
    ifsc:"HDFC0004427",
    intrestRate:"7%",
    showDetails:function(){
        console.log(`................................Hdfc Bank Detail.........................`);
        console.log(`Bank Name:${hdfcBank.bankName},location:${hdfcBank.location},Account No:${hdfcBank.accountNo},Ifsc Code :${hdfcBank.ifsc},Intrest Rate :${hdfcBank.intrestRate}`);
    }
};
const yesBank={
    bankName:"Yes Bank Ltd",
    location:"Ajinkya Plaza CS NO 2908 1 sangola tal-sangola Dist-Solapur Maharashtra 413307",
    accountNo:"0744 145 2221",
    ifsc:"YESB0BMSB13",
    intrestRate:"6%",
    showDetails:function(){
        console.log(`................................YES Bank Detail.........................`);
        console.log(`Bank Name:${yesBank.bankName},location:${yesBank.location},Account No:${yesBank.accountNo},Ifsc Code :${yesBank.ifsc},Intrest Rate :${yesBank.intrestRate}`);
    }
};
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();


