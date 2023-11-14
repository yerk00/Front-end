import React from 'react'
import "./PageRegister.css"
import Login from './Login.jsx';

const PageLogin = () => {
  const imagePath = 'src/assets/images/hombre.jpg';
  return (
    <div className='contenedor'>
  <div className='fotoHombre'>
    <img src={imagePath} alt="" />
    
  </div>
  
  <div className='titulo1'>
    <h1>FIGHT <br></br>
   
      LIKE<br></br>
      
      A<br></br>
      
      CHAM <br></br>
      PION</h1>
  </div>
  <div className='titulo2'>
    <h1>READY FOR YOUR <br></br>
     NEXT LESSON?</h1>
  </div>
  
  <Login/>
</div>

  )
}
export default PageLogin