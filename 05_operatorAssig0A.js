console.log(`..............................step1...........................`);
function greaterNumber(num1,num2){
var result=num1>=num2? num1 :num2;
console.log(`The Greater Number among ${num1}, ${num2} is:${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`..............................Step2..........................`);
function isEvenOrOddNum(num){
var evenOdd=num%2==0?"EVEN":"ODD";
return evenOdd;
}
var evenOdd= isEvenOrOddNum(29);
console.log(`The Given Number 29 is: ${evenOdd}`);

var evenOdd= isEvenOrOddNum(44);
console.log(`The Given Number 44 is: ${evenOdd}`);

var evenOdd= isEvenOrOddNum(101);
console.log(`The Given Number 101 is: ${evenOdd}`);

var evenOdd= isEvenOrOddNum(0);
console.log(`The Given Number 0 is: ${evenOdd}`);
console.log(`..............................Step3..........................`);
function wordLength(word){
    var wordLength=word.length;
    var res=wordLength%2==0?"EVEN":"ODD";
    return res;
}
var res=wordLength("Javascript");
console.log(`The Given Word 'Javascript' is ${res} length`);

var res=wordLength("developer");
console.log(`The Given Word 'developer' is ${res} length`);

var res=wordLength("Google");
console.log(`The Given Word 'Google' is ${res} length`);



