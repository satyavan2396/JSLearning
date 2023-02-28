console.log(`...................step1.................................`);
function voteEligibility(age){
if(age<0 || age>120 ||age===undefined){
    console.log(`Invalid Data Entered age is ${age}`);
}
if(age>=18 && age<=120){
    console.log(`he/she age ${age} is eligible for voting`);
}
if(age<18){
    console.log(`he/she age ${age} is Not eligible for voting`);
}

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);

console.log(`...................step2.................................`);
function gradeCalculation(marks){
if(marks<0|| marks>100 || (typeof marks!="number")||isNaN(marks)){
    console.log(`Please Provide the valid marks-${marks}`);
}
    if(marks>=90 && marks<100){
        console.log(`Funtastic marks:${marks} Your grade is A+`);
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent Marks ${marks} Your grade is A`);
    }
    if(marks>=50 && marks<75){
        console.log(`Good Marks ${marks} Your grade is B`);
    }
    if(marks>=35 && marks<50){
        console.log(`Mark is ${marks} Your grade is C,Need improvement`);
    }
}

 gradeCalculation(98);
 gradeCalculation(80);
 gradeCalculation(90);
 gradeCalculation(0);
 gradeCalculation(150);
 gradeCalculation(-7);
 gradeCalculation(35);
 gradeCalculation(29);
 gradeCalculation(64);
 gradeCalculation(49);
 gradeCalculation("91");
 gradeCalculation("Eighty");
 gradeCalculation(NaN);
 gradeCalculation(null);
 gradeCalculation(undefined);
 

 
 




