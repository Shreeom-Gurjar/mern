//et a = 10
//let b = 20
//(10,20)(300,400)(10,1000)(90,540)
/*console.log(`Sum of ${a} and ${b} = ${a+b}`);
a = 300
b = 400
console.log(`Sum os ${a} and ${b} = ${a+b}`);
a = 400
b =500
console.log(`Sum os ${a} and ${b} = ${a+b}`);
a = 200
b = 433
console.log(`Sum os ${a} and ${b} = ${a+b}`);*/
// function Sum(a,b)
// {
//     console.log(`Sum os ${a} and ${b} = ${a+b}`); 
//     console.log(`Sum os ${a} and ${b} = ${a-b}`); 
//     console.log(`Sum os ${a} and ${b} = ${a*b}`); 
//     console.log(`Sum os ${a} and ${b} = ${a/b}`);   
// }
// Sum(10,20)

function sum(a,b){
    console.log(`Sum os ${a} and ${b} = ${a+b}`); 
    alert(`sum of${a} and ${b} = $ ${a+b}`);
}
function sub(a,b){
    console.log(`Sum os ${a} and ${b} = ${a-b}`); 
    alert(`sum of${a} and ${b} = $ ${a+b}`);
}

function mul(a,b){
    console.log(`Sum os ${a} and ${b} = ${a*b}`); 
    alert(`sum of${a} and ${b} = $ ${a+b}`);

}
function division(a,b){
    console.log(`Sum os ${a} and ${b} = ${a/b}`); 
    alert(`sum of${a} and ${b} = $ ${a+b}`);

}
let userchoice = 2
let userinput1 = 10
let userinput2 =20
// switch(userchoice){
//     case 1: sum(userinput1,userinput2)
//     break;
//     case 2: sub(userinput1,userinput2)
//     break;
//     case 3: mul(userinput1,userinput2)
//     break;
//     case 4: div(userinput1,userinput2)
//     break;
//     default:
// }

let userchoice = parseInt(prompt("for sum Enter 1 \n for sum Enter 2 \n for sum Enter 3 \n for sum Enter 4 \n "));
let userinput1 = parseInt(prompt("Enter first number"))
let userinput2 = parseInt(prompt("Enter secound number"))
switch(userchoice){
    case 1:
        sum(userinput1,userinput2)
        break;
        case 2: sub(userinput1,userinput2)
     break;
     case 3: mul(userinput1,userinput2)
     break;
     case 4: div(userinput1,userinput2)
     break;
     default:
}


