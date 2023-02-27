console.log(`=======================Start If else block======================`);
function maleMarriageEligibility(gender,age,boyName){
    if (age<0 || age==undefined) {
        return `Hey ${boyName} Your age ${age} is not valid`
    }
    if(gender=="male"&&age>=21){
        var str=`Hey ${boyName} you are Eligible for Marrige`;
        return str;
    }
    else{
        var str=`Hey ${boyName} you are Not Eligible for Marrige`;
        return str;
    }

}
var result= maleMarriageEligibility("male",26,"billgates");
console.log(result);

var result= maleMarriageEligibility("male",-30,"satyavan");
console.log(result);

var result= maleMarriageEligibility("male",undefined,"raju");
console.log(result);