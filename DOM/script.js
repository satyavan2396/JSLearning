// console.log(`============== API getElementByTagName() to selct  by TagName==============`);
// const h2Element =document.getElementsByTagName("h2");
// console.log(h2Element[1].innerHTML);
// h2Element[1].innerHTML="My Hobbies";
// console.log(`============== API getElementById() to selct  by Id==============`);
// const elementProfile =document.getElementById("profile")
// console.log(elementProfile.innerHTML);
// console.log(`============== API getElementByClassName() to selct  by className ==============`);
// const listItem= document.getElementsByClassName("liItem")
// console.log(listItem[1].innerHTML);
// console.log(`============== API querySelector() to selct  by id ==============`);
// const elementProfileByQuery = document.querySelector("#profile");
// console.log(elementProfileByQuery);

// console.log(`============== API querySelector() to selct  by class ==============`);
// const elementByQuery = document.querySelector(".liItem");
// console.log(elementByQuery);

// console.log(`============== API querySelectorAll() to selct  by class ==============`);
// const elementByQueryAll = document.querySelectorAll(".liItem");
// elementByQueryAll[3].innerHTML="Oracle Database";
// console.log(elementByQueryAll[3]);

// console.log(`============== changing the CSS properties ==============`);
// const elementTechStack=document.querySelector("#techStack");

// elementTechStack.style.fontFamily="Arial";

// console.log(`============== Remove Element ==============`);
// const elementDivProject=document.querySelector("#divProject");
// const elementProject=document.querySelector("#project")
// elementDivProject.removeChild(elementProject)

// console.log(`============== Adding Element ==============`);
// const elementDiv=document.querySelector("#divProject");
// const elementP =document.createElement("P");
// const elementText =document.createTextNode("Team size-7");
// elementP.appendChild(elementText);
// elementDiv.appendChild(elementP);

// function show(){
//     console.log(`Event...........`);
// }

// const elementAddress=document.querySelector("#address");
// elementAddress.addEventListener("click",()=>{
//     console.log(`Listening event.....`);
//     const inputValue=prompt("You enter value","Default value")
//     console.log(inputValue);
   

// })


// const isEvenButton =document.querySelector("#isEvenButton");
// isEvenButton.addEventListener("click",()=>{
//     console.log("Button licked....");
//      const innputvalue= prompt("Please Enter Number....",0)
//      console.log(innputvalue);
//      const result= innputvalue%2==0?true:false;
//      if(result){
//         alert("Number is Even")
//      }else{
//         alert("Number is Odd");
//      }
// })
// console.log(`============== My Hobbies  ==============`);
// const isHobbies = document.getElementById("ishobbies");
// isHobbies.style.color="Green";
// isHobbies.addEventListener("click",()=>{
//     const yourHobbies =prompt("Enter Your Hobbies.....");
//     console.log(`My Hobbies is :${yourHobbies}`);
// })
console.log(`============== Number is prime or not ==============`);
const primeNumber= document.getElementById("isPrime");
    primeNumber.addEventListener("click",()=>{
    const givenNumber = prompt("Enter a number")
     let p=1;
     for (let index = 2; index <givenNumber; index++) {
       if(givenNumber%index==0)
       p=0;
       break;
     }
    if(p==1)
{
    console.log(`Given Number ${givenNumber} Number is prime`);
}else{
    console.log(`Given Number ${givenNumber} Number is not prime`);
}
})

