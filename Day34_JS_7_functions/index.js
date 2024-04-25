// function with argument with return type
function sum(a,b){
    console.log(`sum of ${a} and ${b} = ${a+b}`)
    return a+b;
}
// function with argument with no return type
function mul(a,b){
    let a = 300
    let b  =10
    console.log(`mul of ${a} and ${b} = ${a*b}`)
    
}
// function without argument with return type
function div(){
   let a = 300
    let b =20
    console.log(`division of ${a} and ${b} = ${a/b}`)
    return a/b;
}
// function without argument with no return type
function test(a,b){
    let a = 300
    let b = 10
    console.log(`division of ${a} and ${b} = ${a/b}`)
    
}
//console.log(sum(10,20))
const result = sum(10,20)
console.log(result)