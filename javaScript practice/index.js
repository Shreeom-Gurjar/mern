// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3
let a = prompt("hey enter your age");
a =number.perseInt(a);
if(a<0){
    console.log("you can not drive");
}
else if(a<18 && a>9)
    {
        console.log("you are thinking driving");
    }
    else {
        console.log("you can drive");
    }