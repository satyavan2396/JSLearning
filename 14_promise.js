const isSirAvailable=false;
let promiseForNotes=new Promise(function(resolve,reject){
    if (isSirAvailable) {
        resolve("Promise and map PDF")
    }else{
        reject("Sorry I didnt get time.....")
    }
});
promiseForNotes.then(function(sucess){
    console.log(`I got the notes let me read it........`);
}).catch(function(failure){
    console.log(`Are Yaar kaise Teacher hai........`);
}).finally(function(){
    console.log(`You should always your Notes`);
});

