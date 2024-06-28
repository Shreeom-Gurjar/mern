import React from 'react'
import Navbar from './component/Navbar'
import Product from './component/Product'
import  './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
const  App = () => {
  return (
   <>
   <Router/>
   <Navbar/>
   <Product/>
   </>
  )
}

export default App
