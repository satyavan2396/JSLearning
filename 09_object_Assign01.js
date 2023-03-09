const professor={
    profId:45,
    profName:"Gajanan Kharat",
    Age:33,
    address:"PUNE",
    aword:"World Best Teacher",
    degrees:{
        degree1:"Engeneering",
        degree2:"CSC",
        degree3:"PHD",
        degree4:"Adv.Computing",
        degree5:"Angular Developer",
        
    },
    certificates:["Hacker Rank Participation","Certficate in IFE course","Certificate in Adv Programming"],
    show:function(){
        return`Professor Degrees are: ${this.degrees.degree1},${this.degrees.degree2},${this.degrees.degree3},${this.degrees.degree4},${this.degrees.degree5}`
    }
    
}
const totalDegree= professor.show();
console.log(totalDegree);
professor.totalExperience="14 Years";
professor.certificates.push("Oracle Certified");
console.table(professor);
console.log(`Last Element is :${professor.certificates[professor.certificates.length-1]}`); 
