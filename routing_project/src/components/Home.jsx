import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about');
  }
  return (
    <div>
      Home page
      <button onClick={handleClick}
      style={{backgroundColor:'blue' ,color:"white"}}
      >Move to About Page</button>
    </div>
  )
}

export default Home
