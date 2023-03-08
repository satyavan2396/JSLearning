//WAP to print Number From 0 to 10
var index=0;
while (index<=10) {
    console.log(index);
    index++;
}
console.log(`============Even Number===============`);
const arrayOfNumbers=[10,20,25,15,40,45,60,40,30,22,26];
var index=0;
let sum=0;
while (index<arrayOfNumbers.length) {
    const element=arrayOfNumbers[index];
    if (element%2==0) {
        console.log(element);
        sum=sum+element
    }
    index++;
}
console.log(`Sumof Even Element is :${sum}`);