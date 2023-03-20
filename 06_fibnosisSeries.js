let firstNumber=0;
let seondNumber=1;
let nextNumber=0;
for (let index = 0; index<8; index++) {
    nextNumber=firstNumber+seondNumber;
    seondNumber=nextNumber+seondNumber;
    firstNumber=seondNumber;
    console.log(` Fibosnies series : ${firstNumber}`);
    
}