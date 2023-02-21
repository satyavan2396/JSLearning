console.log("=================================String assignments======================================");
function stringHandsOn(){
var givenString="    Hey You are doing good,keep it up    "
console.log("1.Given String is:",givenString);
var givenStringLength=givenString.length;
console.log(".......................................................................................");
console.log("2.Given string length is:",givenStringLength);
console.log(".......................................................................................");
var leadingAndExtraSpace=givenString.trim();
console.log("3.Leading and trailing extra spaces from given string is:",leadingAndExtraSpace);
console.log(".......................................................................................");
console.log("Before removing space length is:",givenStringLength);
console.log(".......................................................................................");
console.log("After removing space length is:",leadingAndExtraSpace.length);
console.log(".......................................................................................");
var totalNumberExtraSpace=givenString.length-leadingAndExtraSpace.length;
console.log("4.Total Number of Extra Spaces Are:",totalNumberExtraSpace);
console.log(".......................................................................................");
var firstChar=leadingAndExtraSpace.charAt(0);
var lastChar=leadingAndExtraSpace.charAt(32)
console.log("5.First and last charcter of after trim string is:",firstChar,lastChar); 
var totalWords=leadingAndExtraSpace.split(" ");
console.log(".......................................................................................");
console.log("6.Total  words in  string is:",totalWords);
console.log(".......................................................................................");
console.log("7.Index of word good is:",leadingAndExtraSpace.indexOf("good")); 
console.log(".......................................................................................");
var subString=leadingAndExtraSpace.slice(22)
console.log("8.Substring is:",subString);
var isStringEndWithUp=leadingAndExtraSpace.includes("up");
console.log(".......................................................................................");
console.log("9.Is string ends with `up`:",isStringEndWithUp);

var isStringStartWithHey=leadingAndExtraSpace.includes("Hey");
console.log(".......................................................................................");
console.log("10.Is string ends with `Hey`:",isStringStartWithHey);
}
stringHandsOn();
