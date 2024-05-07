//surface area of cylinder
//A = 2*Pi*r*r+2*Pi*r*h
const sArea = (r,h) => (2*Math.PI*r*r)+(2*Math.PI*r*h)
const r = parseFloat(prompt("Enter the radius of cyliner"))
const h = parseFloat(prompt("Enter the height of cyliner"))
const result = sArea(r,h)
console.log(`The Surface are of cylinder with radius "${r}" and height "${h}" = ${result}`)
alert(`The Surface are of cylinder with radius "${r}" and height "${h}" = ${result}`)