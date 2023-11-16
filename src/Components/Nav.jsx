import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import Picture from './Picture.jsx';

export default function Nav() {
  const navigate = useNavigate();
  const imagePath = '/gym.png';
  const image = '/logoufc.png';

  return (
    <div className='full-screen'>
      <div className='navbar'>
        <button className='boton-register' onClick={() => navigate('/Registro')}>Iniciar sesión</button>
        <button className='boton-informacion'onClick={() => navigate('/Informacion')}>Informacion</button>
        <img src={image} alt='' className='logo'/>
      </div>
      <div className='imagen'>
        <img src={imagePath} alt='' />
      </div>
    </div>
  );
}