import React from 'react'
import Home from '../Home'
import './Casilleros.css'
export const Casilleros = () => {
  return (
    <div>
      
      <div className='casilleros'>
        <div className='gradiente'></div>
         <h1 className='textmodulos'>Bienvenido a la pagina de reserva de casilleros</h1>
        <div className='lineanegra'></div>
        <div className='textmodulos'>
          <h1>RESERVA DE CASILLEROS</h1>
        </div>
        <div className='fotomodulos'>
          <img src='src/assets/images/casilleros.jpg' alt="" />
        </div>
        <div className='lineanegra'></div>
         <h1 className='textmodulos'>Gracias por reservar</h1>
      </div>
    </div>
  )
}
