const isSirAvailable=false;
let promiseForNotes=new Promise((resolve,reject)=>{
    if (isSirAvailable) {
        resolve("Promise and map PDF")
    }else{
        reject("Sorry I didnt get time.....")
    }
});
promiseForNotes.then(sucess=>console.log(`I got the notes let me read it........`)
).catch(failure => console.log(`Are Yaar kaise Teacher hai........`)
).finally(()=>console.log(`You should always your Notes`)
);

