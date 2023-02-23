console.log(`..................step1........................`);
function maleMarriageEligibility(gender,age,boyName){
var result=(gender=="male"&&age>=21)?`Hey ${boyName} you are eligible for marriage`:`Hey ${boyName} you are not Eligible For Marriage`;
return result;
}
var result=maleMarriageEligibility("male",25,"Billigates");
console.log(result);
console.log(`................................................`);
var result=maleMarriageEligibility("male",17,"Stew Jobs");
console.log(result);

console.log(`..................step2........................`);
function femaleMarriageEligibility(gender,age,girlName){
var result=(gender=="Female"&& age>=18)? `Hey ${girlName} You are Eligible For Marriage`:`Hey ${girlName} You are Not Eligible For Marriage`;
return result;
}
var result=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);
console.log(`................................................`);
var result=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);