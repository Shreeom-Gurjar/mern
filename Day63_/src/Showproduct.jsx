import React from 'react'
import { poduct } from './data1';
const Showproduct = ({productdata,setproductData}) => {
    const filterByCategory = (category)=>{
        const newProduct = product.filter((data)=>data.category== category)
        console.log(newProduct)
        setMovieData(newProduct)
    }
  return (
    <>
    <div style={{ textAlign:"center",padding:"10px"}}>
    <button  onClick={()=>filterByCategory("Sci-Fi")}>Science Fiction</button>
        <button onClick={()=>filterByCategory("Drama")}>Drama</button>
        <button  onClick={()=>filterByCategory("Action")}>Action</button>
        <button  onClick={()=>filterByCategory("Crime")}>Crime</button> 
        <button  onClick={()=>filterByCategory("Fantasy")}>Fantasy</button>
       
    </div>
    <div>
    {moviesdata.map((data)=>(<div key={data.id} style = {{backgroundColor:'blueviolet',textAlign:'center',margin:"10px",padding:'10px'}}>
      <h1>{data.category}</h1>
      <h3>{data.movieName}</h3>
      <p>{data.description}</p>
      <h3>{data.releaseDate}</h3>
      <h3>{data.imdbrating}</h3>
      
    </div>))}
  </div>
      </>
    
  )
}

export default Showproduct
