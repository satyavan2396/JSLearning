console.log(`...................Switch Statement..........................`);
function dayCheck(day){
switch (day) {
    case 1:
        console.log(`Monday value is ${day}`);
        break;
    case 2:
        console.log(`Tuesdsay value is ${day}`);
        break;
    case 3:
        console.log(`Wednesday value is ${day}`);
        break;
    case 4:
        console.log(`Thursday value is ${day}`);
        break;
    case 5:
        console.log(`Friday value is ${day}`);
        break;
    case 6:
        console.log(`Saturday value is ${day}`);
        break;
    case 7:
        console.log(`Sunday value is ${day}`);
        break;

    default:
        console.log(`Invalid Data Entered value is ${day}`);
        break;
}
}
dayCheck(3);
dayCheck(0);
dayCheck(6);
dayCheck(8);