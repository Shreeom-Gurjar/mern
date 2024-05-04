// const binarySearch =(arr,target)=>{
//     let start =0;
//     let end = arr.length -1;
//     let mid;
//     while(start<end){
//         mid =Math.floor((start+end)/2)
//         if(arr[mid] == target){return mid}
//         else if (arr[mid] > target){
//             end = mid -1;
//         }  
//     else if(arr[mid]<target){
//         start=mid+1;
//     }
//     }
//     return -1;
// }
// const arr =[99,100,101,201,203,204,205,206,207,209,210,217,218]
// target=219;
// const result = binarySearch(arr,target)
// let i=0
//  if(arr[i]==target){
//     console.log("element found",i);
// }
// i++;
// if(i==arr.length){
// console.log("element not found")
// }
// console.log(result)

 const emps =[
    {name:"shubham",salary:120000,age:"20"},
    {name:"ram",salary:125000,age:"21"},
    {name:"shivam",salary:130000,age:"22"},
    {name:"hariom",salary:135000,age:"23"},
    {name:"nilesh",salary:140000,age:"24"},
    {name:"ayush",salary:160000,age:"25"},
    {name:"chandan",salary:165000,age:"26"},
    {name:"shiv",salary:170000,age:"27"},
    {name:"nitin",salary:180000,age:"28"},
    {name:"mukesh",salary:190000,age:"29"},
    {name:"ramcharan",salary:175000,age:"30"},
    {name:"harsh",salary:250000,age:"31"},
 ]
 const element =[];
 for(let i=0;i<emps.length;i++){
    if(emps[i].salary>150000 && emps[i].salary<190000)
        {
        element.push(emps[i]);
       
 }
 
console.log(element)
 }
 