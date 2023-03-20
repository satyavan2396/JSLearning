 
 let globalVariable=100;
 function outer(){
    console.log(`This is outer function`);
    let outerVariable=300;
    let inner= function(){
        console.log(`This Is Inner Function`);
        let innerVariable=500;
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable00);
    }
    return inner;
 }
 const innerFun=outer();
 innerFun();