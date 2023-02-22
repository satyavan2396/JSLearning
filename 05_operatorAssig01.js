console.log(`========================Operator Assignment step 1=====================================`);
function squareOfWord(word){
    console.log(`1.Given string is ${word}`);
    
var wordLength=word.length;

console.log(`1.1 Given word length is: ${wordLength}`);
return wordLength**2;

}
var wordSquare=squareOfWord("Javascript");
console.log(`1.2 square is ${wordSquare}`);
console.log(`......................................................................................`);

var wordSquare=squareOfWord("Google Chrome");
console.log(`1.2 square is ${wordSquare}`);
console.log(`......................................................................................`);
var wordSquare=squareOfWord("Developer Smart");
console.log(`1.2 square is ${wordSquare}`);
console.log(`========================Operator Assignment step 2=====================================`);
function givenString(){
var givenStr="I am Angular Developer";
var givenStrLength=givenStr.length;
console.log(`Length of Given String is: ${givenStrLength}`);
console.log(`......................................................................................`);

var totalWords=givenStr.split(" ");
var totalWordsLength=totalWords.length
console.log(`Total words available in the string is: ${totalWordsLength}`);
console.log(`......................................................................................`);

var result=givenStrLength/totalWordsLength;
console.log(`Division of given string is:${result}`);
console.log(`......................................................................................`);

var result1=givenStrLength*totalWordsLength;
console.log(`Multiplication of given string and total words of this string is ${result1}`);

}

givenString();
