const arr = [2,4,4,3,6,1,9,9,2,3];
function RemoveElement (arr){
    const newarr = [];
    for(let i =0;i<arr.length;i++){
   if (newarr.indexOf(arr[i]) === -1){
    newarr.push(arr[i]);
   }
    }
    return newarr;
}
console.log(RemoveElement(arr));
