console.log("................step1...........................");
function show(){
console.log("I like javascript Language.");
}
show();
function call(){
    console.log("Function is block of code used to perform particular task");
}
call();
console.log("................step2...........................");
function personalDetails(firstName,lastName,collegeName){
console.log("MY First Name is:",firstName,"","My Last Name is:",lastName,"","My College Name is:",collegeName);
}
personalDetails("Satyavan","Shejal","Sangola Collage Sangola");
console.log("................step3...........................");
function swapValuesDude(value1,value2){
    console.log("Before Swapping Value is:",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swapping Value is:",value1,value2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log("................step4...........................");
function addThreeValues(num1,num2,num3){
return sum=num1+num2+num3;
}
var result=addThreeValues(10.23,600,40);
console.log("Addition of Three Numbers is:",result);
var result=addThreeValues("Hello","Good","Morning");
console.log("Combination of three string is:",result);