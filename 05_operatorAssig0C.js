console.log(`.................................step1......................`);
function checkTcsInterviewEligibility(gradScore,hscScore,sscScore,candiateName){
var result=gradScore>=70||hscScore>=80 ||sscScore>90? `Congralution ${candiateName} You are Eligible For TCS Interview`:`Hey ${candiateName} You are Not Eligible For TCS Interview`;
return result;
}
var result=checkTcsInterviewEligibility(80,86,90,"Ganesh Pawar");
console.log(result);
console.log(`........................................................`);
var result=checkTcsInterviewEligibility(70,65,55,"Sahil Mulani");
console.log(result);
console.log(`........................................................`);
var result=checkTcsInterviewEligibility(60,79,88,"Vikas Shinde");
console.log(result);