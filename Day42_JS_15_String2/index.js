//charAt - to find a character in particular index of place
// const str = "Spuerman"

// //to find length of string
// console.log("To find length ",str.length)

// // console.log(str.charAt(0));
// for(let i=0;i<str.length;i++)
//     {
//         console.log(str.charAt(i))
//     }





// Education => vowels => a,e,i,o,u
const vowels = (str) =>{
    let vowelsCount=0;
    let constCount =0;
    let vowels =[];
    let consonent=[];
}
let str2 = str.toLowerCase();
for(let i=0;i<str2.length;i++){
    let char = str.charAt(i);
    
    if(char == 'a' || char == 'i' || char == 'o' || char == 'e' || char == 'u'){
        vowelsCount++;
        vowels.push(str.charAt(i));
    }else{
        constCount++;
        constCount.push(str.charAt(i));
    }
    console.log(vowelsCount);
    console.log(vowels);
    console.log(constCount);
    console.log(consonent);
}
const str ="eDuAcation"
vowels(str)




// const str ="Superman"
// console.log(str.indexOf('u'))

//split by
// const str ="The superman is belong from DC";
// console.log(str.split('  '))


 