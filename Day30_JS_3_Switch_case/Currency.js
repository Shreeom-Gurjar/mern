
const pound = 103.80;
const dollar =83.47;
const yen = 0.54;
const euro = 88.89;
const dinar =272.79;
let userINR = prompt("Enter INR")

let convert = prompt("INR to pound Enter .1 \n INR to doller Enter .2 \n INR to Japan yen Enter .3 \n euro to INR  Enter .4 \n dinar to INR Enter  ");
let result;
switch(convert){
    case 1:{
        totalINR = userINR/pound
        console.log(`${userINR} in pound = ${result} pound`);
        
    }
    break;
    case 2:{
        result = userINR/dollar
        console.log(`${userINR} in US dollar = ${result} dollar`);
        
    }
    break;
    case 3:{
        result = userINR/yen
        console.log(`${userINR} in Japan yen = ${result} yen`);
    }
    break;
    case 4:{
        result = userINR*euro
        console.log(`${userINR} in euro= ${result} Rupees`);
    }
    break;
    case 5:{
         result = userINR * dinar
         console.log(`${userINR} in dinar = ${result} Rupees`);
    }
    break;
    default:
        console.log("Invalid Currency");
}