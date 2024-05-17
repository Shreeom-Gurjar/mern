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

let str2 = str.toLowerCase();
for(let i=0;i<str2.length;i++){
    let char = str2.charAt(i);
    
    if(char == 'a' || char == 'i' || char == 'o' || char == 'e' || char == 'u'){
        vowelsCount++;
        vowels.push(str.charAt(i));
    }else{
        constCount++;
        consonent.push(str.charAt(i));
    }
}

    console.log(vowelsCount);
    console.log(vowels);
    console.log(constCount);
    console.log(consonent);
}
const str ="eDuAcation"
vowels(str)




// const vowels = (str) => {
//     let vowelsCount = 0;
//     let constCount = 0;
//     let vowelsArray = [];
//     let consonantArray = [];

//     // Convert the input string to lowercase
//     let str2 = str.toLowerCase();

//     // Iterate through each character of the lowercase string
//     for (let i = 0; i < str2.length; i++) {
//         let char = str2.charAt(i);
        
//         if (char === 'a' || char === 'i' || char === 'o' || char === 'e' || char === 'u') {
//             // Increment vowel count and push vowel to vowelsArray
//             vowelsCount++;
//             vowelsArray.push(char);
//         } else if (char >= 'a' && char <= 'z') {
//             // Increment consonant count and push consonant to consonantArray
//             constCount++;
//             consonantArray.push(char);
//         }
//     }

//     // Output the results
//     console.log("Vowel Count:", vowelsCount);
//     console.log("Vowels:", vowelsArray);
//     console.log("Consonant Count:", constCount);
//     console.log("Consonants:", consonantArray);
// }

// const str = "eDuAcation";
// vowels(str);




// const str ="Superman"
// console.log(str.indexOf('u'))

//split by
// const str ="The superman is belong from DC";
// console.log(str.split('  '))


 