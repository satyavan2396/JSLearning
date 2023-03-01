console.log(`............... switch statement Assignment...........................`);
function monthOfYear(monthNumber){
switch (monthNumber) {
    case 1:
        console.log(`Given value is ${monthNumber} --> January`);
        break;
    case 2:
            console.log(`Given value is ${monthNumber} --> Febuary`);
            break;
    case 3:
        console.log(`Given value is ${monthNumber} --> March`);
        break;
    case 4:
        console.log(`Given value is ${monthNumber} --> April`);
        break;
    case 5:
        console.log(`Given value is ${monthNumber} --> May`);
        break;
    case 6:
        console.log(`Given value is ${monthNumber} --> June`);
        break;
    case 7:
        console.log(`Given value is ${monthNumber} --> July`);
        break;
    case 8:
        console.log(`Given value is ${monthNumber} --> August`);
        break;
    case 9:
        console.log(`Given value is ${monthNumber} --> September`);
        break;
    case 10:
        console.log(`Given value is ${monthNumber} --> Ocomber`);
        break;
    case 11:
        console.log(`Given value is ${monthNumber} --> November`);
        break;
    case 12:
        console.log(`Given value is ${monthNumber} --> December`);
        break;
    default:
        console.log(`Invalid Value is Entered  ${monthNumber}`);       
        break;
}
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
monthOfYear(0);
monthOfYear(-5);
monthOfYear("10");
monthOfYear(10);

