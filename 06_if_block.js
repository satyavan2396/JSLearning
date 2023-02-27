console.log(`start`);
var num=10;
if (num>0) {
    console.log("Inside if Statement");
    console.log(`Number is Positive ${num}`);
}
console.log(`End`);

var ageForVote=20;
if (ageForVote>18) {
    console.log(`You are Eligible for voting`);
    console.log(`Age is ${ageForVote}`);
    
}
console.log(`End of next if block`);
function checkEvenOdd(num){
if(num%2==0){
    return "Even";
}
if(num%2!=0){
    return "ODD";
}
}
 var result=checkEvenOdd(45);
 console.log(`Given number 45 is ${result}`);

 var result=checkEvenOdd(70);
 console.log(`Given number 70 is ${result}`);

 console.log(`..........if else block.................`);
 var num1=5;
 if (num1>0) {
    console.log(`Number ${num1} is positive`);
 } else {
    console.log(`Number ${num1} is Negative`);
 }
 
 function maleMarriageEligibility(gender,age,boyName){
if (gender=="male" && age>=21) {
    console.log(`You are Eligible`);
    
} else {
    console.log(`You are not Eligible`);
}
 }
 maleMarriageEligibility("male",25,"Satyavan Shejal")
 maleMarriageEligibility("male",20,"Billigates")