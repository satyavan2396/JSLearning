const sbiBank={
    bankName:"State Bank Of India",
    location:"Sangola",
    accountNo:"0749 1056 2233",
    ifsc:"SBIN0000749",
    intrestRate:"8%",
    };
    const axisBank={
        bankName:"Axis Bank",
        location:"CS No 2976/5 shree complex station Road sangola tal-sangola Dist-Solapur Maharashtra 413307",
        accountNo:"0748 1057 2234",
        ifsc:"UTIB0003816",
        intrestRate:"9%",
    };
    const hdfcBank={
        bankName:"HDFC Bank",
        location:"Dnyaneshwar Complex Miraj Road sangola tal-sangola Dist-Solapur Maharashtra 413307",
        accountNo:"0748 1057 2234",
        ifsc:"HDFC0004427",
        intrestRate:"7%",
    };
    const yesBank={
        bankName:"Yes Bank Ltd",
        location:"Ajinkya Plaza CS NO 2908 1 sangola tal-sangola Dist-Solapur Maharashtra 413307",
        accountNo:"0744 145 2221",
        ifsc:"YESB0BMSB13",
        intrestRate:"6%",
    };
    const arrayOfBanks=[sbiBank,axisBank,hdfcBank,yesBank];//Objecta are added in array
    for (const bank of arrayOfBanks) {
        console.log(bank);
    }
   for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    console.log(`${element.bankName},${element.location},${element.accountNo},${element.ifsc},${element.intrestRate}`);
    
   }