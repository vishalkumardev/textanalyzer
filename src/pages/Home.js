import React, { useState } from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'


function Home() {
const [mode, setMode] = useState('light');
const toggleMode = () =>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#1B1B1D"
  }else{
    setMode("light")
    document.body.style.backgroundColor="#fff"
  }
}
  return(
  <>
  
  <Navbar mode={mode}  toggleMode={toggleMode}/>

    <div className="container" >
      <Form mode={mode}/>
      </div>
  </>
  )
}

export default Home