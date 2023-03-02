
var totalCountVowels= function(str){
    var count=0;
    for (let index = 0; index <=str.length-1; index++) {
    var char=str.charAt(index);
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u" ||char=="A"||char=="E"||char=="I"||char=="O"||char=="U"){
        count=count+1;
    }
      
}
return count;
}
var result= totalCountVowels("Javascript is the language Of Internet");
console.log(`Total numbers of vowels of the given string "Javascript is the language Of Internet" is:${result}`);

var result= totalCountVowels("I am Angular developer");
console.log(`Total numbers of vowels of the given string "I am Angular developer" is:${result}`);

var result= totalCountVowels("Hard work and commitment is the key of success");
console.log(`Total numbers of vowels of the given string "Hard work and commitment is the key of sucess" is:${result}`);

console.log(`..................step 2......................`);
function lastWordCharCount(str){
    var count=0;
    for (let index =str.length-1; index>=0; index--) {
       var char=str.charAt(index);
       if (char==" ") {
        break;
       }
        count=count+1;
    }
return count;
}
var result=lastWordCharCount("Javascript is the length of Internet");
console.log(`Total charter of last word is :${result}`);

var result=lastWordCharCount("I am Angular developer");
console.log(`Total charter of last word is :${result}`);

var result=lastWordCharCount("Hard work and commitment is the key of success");
console.log(`Total charter of last word is :${result}`);







