//Function with no arguments no return value
function showFullName(value){
console.log("My Full Name is:","satyavan Jagannath shejal");
}
showFullName();
//Function with arguments no return value
function showAge(age){
console.log("My age is:",age);
}
showAge(26);
//Function with no arguments with return value
function fullName(){
var name="Satyavan Jagannath Shejal";
return name;
}
var result=fullName();
console.log("Full name is:",result);
//Function with arguments with return value
function sumOfNumbers( num1,num2,num3){
var result=num1+num2+num3;
return result;
}
var sum=sumOfNumbers(10,45,79.56);
console.log("Sum of three numbersis:",sum);


var num1=200;
var num2=300;

var str1="Sweety";
var str2="Cutie";

var name1="Billigates";
var name2="stew Jobs"
function swapVariables(value1,value2){
console.log("Before Swapping Variable:", value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After swapping variable:",value1,value2);
}
swapVariables(num1,num2);
swapVariables(name1,name2);
swapVariables(str1,str2);