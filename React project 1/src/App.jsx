import React from 'react'
import  './App.css'
const  App = () => {
  return (
    <div>
        <nav>
            <div className='logo'></div>
            <img src="public/nike logo.jpg" alt="logo" height ="50px" width="150px"></img>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contect</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default App
