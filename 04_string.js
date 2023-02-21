var greet="Good Morning";
console.log("The type of greet variable is:",typeof greet);
var greetLength=greet.length
console.log("Total Number Character avialable in this string is:",greetLength);
console.log(".....................Find the character by index value.......................");
var characterAtIndex3=greet.charAt(3)
console.log("Character at index 3 is:",characterAtIndex3);
var charAtLastIndex=greet.charAt(greetLength-1)
console.log("last char is:",charAtLastIndex)
console.log("Find the index by character value");
var indexOfM=greet.indexOf("M");
console.log("Indexof charcter M is:",indexOfM);
console.log("Indexof charcter which is not avilable in the string :",greet.indexOf("Z"));
console.log("Index of o char is:",greet.indexOf("o"));
console.log("Index of o char is:",greet.lastIndexOf("o"));
var repalceResult=greet.replace("Morning","Evening")
console.log(repalceResult);
console.log(greet);
console.log("Upper Case:",repalceResult.toUpperCase());
console.log("Lower Case:",repalceResult.toLowerCase());

var myName="   Mohit   Sharama ";
var myNameAfterTRim=myName.trim();
console.log("Removing extra star and ens spaces :",myNameAfterTRim);
console.log("Before removing spaces",myName.length);
console.log("After removing spaces",myNameAfterTRim.length);
//find the total extra spaces removed from the string
var count=myName.length-myNameAfterTRim.length;
console.log(count);
console.log("Is sbustring avilable or not in greet:",greet.includes("Mor"));
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
var splitResult=greet.split(" ");
console.log(splitResult,typeof splitResult);