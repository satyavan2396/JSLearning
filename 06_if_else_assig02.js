console.log(`--------------------if_else_statement..........................`);
function checkTcsInterviewEligibility(gradScore,hscScore,sscScore,candiateName){
if(gradScore>=70 ||hscScore>=80 ||sscScore>=90){
    console.log(`Congrates ${candiateName} you are Eligible for TCS interview`);
}
else{
    console.log(`${candiateName} You are Not Eligible for TCS Interview Next Time Good Luck.......`);
}
}
checkTcsInterviewEligibility(80,86,90,"Satyavan Shejal");
checkTcsInterviewEligibility(70,65,55,"Vishal katkar");
checkTcsInterviewEligibility(60,79,88,"Dilkhush Mane");