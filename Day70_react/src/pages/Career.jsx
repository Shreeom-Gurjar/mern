import React from 'react'
import { useNavigate } from 'react-router-dom'
const Career = () => {
  const navigate = useNavigate();
  return (
    <div>
      career
      <button onClick={()=>navigate('/team')}>Navigate to team page</button>
    </div>
  )
}

export default Career
