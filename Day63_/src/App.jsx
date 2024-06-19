import React, { useState } from 'react'
import Showmovie from './Showmovie';
import { movies } from './data';
import Showproduct from './Showproduct';
import Showproduct from './Showproduct';
import {product} from './data1';
const App = () => {
 
 const[movieData,setMovieData]= useState(movies); 
  const[productdata,setproductdata]=useState(product)
  return (
    <div>
      <Showmovie moviesdata={movieData} setMovieData={setMovieData}/>
      <Showproduct productdata={productdata} setProduct={setproductData}/>
    </div>
  )
};

export default App

