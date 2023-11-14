import React from 'react'
import "./PageRegister.css"
import Register from './Register.jsx';

const PageRegister = () => {
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
  
  <Register/>
</div>

  )
}

export default PageRegister