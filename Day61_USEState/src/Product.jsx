import React from 'react'
import {useState} from 'react'

const Product = () => {
    const [product,setProduct] = useState("iphone17");
    const increase = ()=>{
        setProduct("Sony")
        console.log(product);
    }
    const decrease = ()=>{
        setProduct("kuchh bhi")
        console.log(product);
    }
  return (
    <div>
      <h1>{product}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Product
