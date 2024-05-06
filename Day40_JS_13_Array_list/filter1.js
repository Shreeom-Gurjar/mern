const product = [
    {
        id:1,
        name:"shriom",
        category:"Nike",
        size:"xl",
        
    },
    {
        id:2,
        name:"shubham",
        category:"siyaram",
        size:"L",
    },
    {
        id:3,
        name:"aayush",
        category:"puma",
        size:"xll",
    },
    {
        id:4,
        name:"chandan",
        category:"puma",
        size:"xl",
    },
   
]
const result = product.filter((data)=>data.category == "puma")
console.log(result)