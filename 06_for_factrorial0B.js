function factorialOfWordsCount(str){
if (str==null || str==undefined ||(isNaN(str)&& typeof str=="number") ){
    console.log(`You Entered Invalid Data : ${str}`);
    
}else{
    console.log(`Given string is Valid:${str}`);
    let words=str.split(" ");
    const totalWords=words.length;
    let factorial=1;
    for (let index = totalWords; index>=1; index--) {
        factorial=index*factorial;
        
    }
   console.log(`Factorial of "${str}" is ${factorial}`);
}
}
factorialOfWordsCount(null);
factorialOfWordsCount(undefined);
factorialOfWordsCount(NaN);
factorialOfWordsCount(`Revision is the mother of succcess`);
factorialOfWordsCount(`We never fail, we always learn`);
factorialOfWordsCount(`Satyavan Jagannath Shejal`);


