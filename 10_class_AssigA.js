console.log(`.................1. Define Car vehicle  5  object using class....................`);
class Vehicle{
    carName
    carColor
    carPrize
    carModel
    constructor(carName,carColor,carPrize,carModel){
        this.carName=carName;
        this.carColor=carColor;
        this.carPrize=carPrize;
        this.carModel=carModel;
    }

}
const shiftCar=new Vehicle("Shift","Black","8 Lakh" ,2014);
const innavoCar=new Vehicle("Innavo","white","12 lakh",2011)
const fortunerCar=new Vehicle("Fortuner","gold","45 lakh",2024)
const martuiSuzuki=new Vehicle("Maruti Suzki","yellow","5 lakh",2016)
const mercidiesCar=new Vehicle("Mercidies","sky blue","1 Cr",2027)
const arfrayOfVehicles=[shiftCar,innavoCar,fortunerCar,martuiSuzuki,mercidiesCar];
console.log(`..........Vehicles 5 Object Traves using for of loop...............`);
for (const element of arfrayOfVehicles) {
    console.log(`Car Name :${element.carName}, Car Color :${element.carColor}, Car Prize :${element.carPrize}, Car Model : ${element.carModel}`);
}
console.log(`.................. 2. Defince class for college ...................`);
 class College{
    collegeName
    address
    collegeHeadMaster
    totalStaff
    branch
    degrees
    constructor(collegeName,address,collegeHeadMaster,totalStaff,branch,degrees){
            this.collegeName=collegeName;
            this.address=address;
            this.collegeHeadMaster=collegeHeadMaster;
            this.totalStaff=totalStaff;
            this.branch=branch;
            this.degrees=degrees;
    }
 }
 const college1=new College("Laxmiodevi Jr. College Sonand","Sonand","Mr.Pushpa Mahankal",36,"Arts,Sci,Comm","Msc,Diploma,Engerring");
const college2=new College("Sangola Jr. College sangola","Sangola","Mr.Ramesh Gaikwad",45,"Arts,Sci,Comm","Msc,Diploma,Engerring, Civil Engerring");
const college3=new College("Fabtech Jr. College sangola","Sangola","Mr.Rupesh Rupanar",60,"Arts,Sci,Comm","Msc,Diploma,Engerring Medical");
const college4=new College("Sahyadhri Jr. College sangola","Kamlapur","Mr.Gajanana Kharat",55,"Arts,Sci,Comm","Msc,Diploma,Engerring,ITI,Mechnical Eng.");

console.log(`......... Traversing Avove Object .............`);

function traverseObject(arg1){
for (const key in arg1) {
    if (Object.hasOwnProperty.call(arg1, key)) {
        const element = arg1[key];
        console.log(` Object ${key}:${element}`);
        
    }
   
}

}
console.log(`......... 1 st Object College1 traves using for in loop ...................`);
traverseObject(college1);
console.log(`......... 2 nd Object College2 traves using for in loop ...................`);
traverseObject(college2);
console.log(`......... 3 rd Object College3 traves using for in loop ...................`);
traverseObject(college3);
console.log(`......... 4th  Object College4 traves using for in loop ...................`);
traverseObject(college4);


