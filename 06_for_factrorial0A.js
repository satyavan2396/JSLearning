function factorialOfNum(num){
    if (num==null || num==undefined || isNaN(num)) {
        console.log(`Given input is : ${num}  Invalid`);
    }else{
        let factorial=1;
        for (let index = num; index>=1; index--) {
            factorial=index*factorial
            
        }
        console.log(`Given number is :${num} Factorial is : ${factorial}`);
    }

}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(NaN);




