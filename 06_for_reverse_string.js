console.log(`..........reverse string............`);
var reverseString=function(str){
    var reverse="";
for (let index = str.length-1; index>=0; index--) {
var charAt=str.charAt(index);
    reverse=reverse+charAt;
}
return reverse;
}
var result= reverseString("Do it anyhow");
console.log(`The Reverse string is:${result}`);
console.log(`...............reverse last word ..........`);
var reverseString=function(str){
    var reverse="";
for (let index = str.length-1; index>=0; index--) {
var charAt=str.charAt(index);
if (str.charAt(index)==" ") {
    break;
}
    reverse=reverse+charAt;
}
return reverse;
}
var result= reverseString("Do it anyhow");
console.log(`The Reverse last word is:${result}`);

// I am Ngular champ
var str="I am angular champ";
var count=0;
for (let index = 0; index<=str.length-1; index++) {
    var charAt=str.charAt(index);
    if(charAt==" "){
count=count+1
    }
    
}
console.log(`Total number of space is:${count}`);