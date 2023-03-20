
console.log(`.................  1.with no args and no return value   .................`);
let show= ()=>console.log(`"Good Morning ,Today is Monday."`);
show();

console.log(`..........  2.with 3 args and no return value, for received 3 parameters perform the multiplication   .....`);
 let multiply=(arg1,arg2,arg3=1)=>
    console.log(`Multiplication of Given  parameters : ${arg1*arg2*arg3}`);
    multiply(5,5,2);
    multiply(10,4);
    
    console.log(`..........  3.with 5 args and  return value, for received parameters it should do the addition   .....`);
    let add=(num1,num2,num3,num4,num5)=>{
        return num1+num2+num3+num4+num5;
    }
    let addition =add(100,100,200,349,756);
console.log(`Addition of given parameters is: ${addition}`);

let result =add("I am"," Learning", " ES6"," Features", " in depth");
console.log(result);


