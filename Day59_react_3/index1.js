const arr = [2,-1,6,-5,3,4,1];
function newmax(arr){
    let max1 = [0];
    let max2 = [0];
    for(let i =0;i<arr.length;i++){
        max1 = Math.max(arr[i],max1+arr[i])
        max2 = Math.max(max1,max2)
    }
    return max2;
}
console.log(newmax(arr))
