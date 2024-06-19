
import React from 'react'
import {useState} from 'react'
//useState,useEffect,useContext,[useParams,useNavigate,useLocation],[useSelector,useDispatch]
const App = () => {
  //let count = 0;
  //const [counter,setCouter] = useState(0)
   const [counter,setCounter]=useState(0);

  const increase= ()=>{
    setCounter(counter+1);
    console.log(counter);
  }
  const decrease = ()=>{
    setCounter(counter-1);
    console.log(counter);
  }
  return (
    <div>
     <h1>{counter}</h1>
     <button onClick ={increase}>increase</button>
     <button onClick ={decrease}>decrease</button>
    </div>
  )
}

export default App
