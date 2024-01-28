const profileDetails=document.getElementById("demo");
profileDetails.style.color="green";

const techStack1= document.getElementById("techStack");
techStack1.style.color="red";
console.log(techStack1);

console.log(`Removing Element`);
const ulElement= document.querySelector("#ulElement");
const liItem= document.querySelector("#project");
ulElement.removeChild(liItem)