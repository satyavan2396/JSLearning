console.log(`=========Non-Premitive Data type Array Assignment-A==============`);
const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`Given Array :${arraySeasonalFruits}`);
console.log(`1.Log the First and last Element on Console.`);
const firstElement= arraySeasonalFruits[0];
console.log(`First Element Of Given Array is:${firstElement}`);
const lastElement= arraySeasonalFruits[4];
console.log(`Last Element Of Given array is : ${lastElement}`);

console.log(`2.Add Element---> "Papya" at strating then unshift() is used.`);
console.log(`Given array is :${arraySeasonalFruits}`);
const addingElementStart= arraySeasonalFruits.unshift("Papaya");
console.log(`adding "Papaya" before Banana Then array is : ${arraySeasonalFruits}`);

console.log(`3.Remove Mangofrom array----->splice() is used`);
console.log(`Given array is: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,1);
console.log(`After Removing "Mango"Element Remaining array is :${arraySeasonalFruits}`);

console.log(`4.Add Element or Insert Element "Pineapple" at the last Position ----->push() is used`);
console.log(`Given array is: ${arraySeasonalFruits}`);
arraySeasonalFruits.push("PineApple");
console.log(`After Adding "PineApple" Element in lastPosition Array is :${arraySeasonalFruits}`);

console.log(`5.Insert an Element "Dragon Fruit" before "Water Melon" ----->splice() is used`);
console.log(`Given array is: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`"Dragon Fruit" addede before "Water Melon" array is:${arraySeasonalFruits}`);

console.log(`6.Replace an Element "Orange" with "Kiwi" ----->splice() is used`);
console.log(`Given array is: ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(2,1,"Kiwi")
console.log(`After Replacing "Orange" with "Kiwi" Array is:${arraySeasonalFruits}`);

console.log(`7.Log the Element statring From the 1 to 4 ------->slice() is used`);
console.log(`Given array is: ${arraySeasonalFruits}`);
const subArray= arraySeasonalFruits.slice(1,4);
console.log(`Log The Element starting from index 1 to 4 Array is : ${subArray}`);

console.log(`8.Only Select last 3 element and log on console---->length property is useed`);
console.log(`Given array is: ${arraySeasonalFruits}`);
const lastThreeElement= arraySeasonalFruits.slice(4);
console.log(`Last Threee Element of Array is: ${lastThreeElement}`);
console.log(`==========================Thank You======================`);
