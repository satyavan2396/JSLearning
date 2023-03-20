console.log(myName);// allowed toaccess
//console.log(age);//Not allowedto access
var myName="Virat Kohli";
let  age=33;
show();//allowed to access function bcz normal function this hosting
function show(){
    console.log("show {} function");
}
//greet();// before intilize  function calling is not access==>not hosting
 var greet =function(){
    console.log(`Good Morning`);

 }

 greet();