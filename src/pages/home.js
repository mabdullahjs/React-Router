import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{padding:"3rem"}}>
      <h1>Home</h1>
      <button onClick={()=> navigate('/service')} variant="primary">Services</button>
      <button onClick={()=> navigate('/about')} className='m-3' variant="primary">About</button>
    </div>
  )
}

export default Home