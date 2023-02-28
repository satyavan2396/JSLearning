console.log(`------------------leap year Program..........................`);
var checkLeapYear=function(leapYear){
    if(leapYear<0 ||leapYear==null ||isNaN(leapYear)){
        console.log(`${leapYear}:Please provide the correct value`);
    }
if(leapYear%4==0 && leapYear%100!=0 || leapYear%400==0){
    console.log(`${leapYear} :is leap Year`);
}
else{
    console.log(`${leapYear}:This is Not leap Year`);
}
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
