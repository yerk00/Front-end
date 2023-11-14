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
        <button onClick={() => navigate('/Registro')}>Iniciar sesión</button>
        <button onClick={() => navigate('/Informacion')}>Informacion</button>
        <img src={image} alt='' className='logo'/>
      </div>
      <div className='imagen'>
        <img src={imagePath} alt='' />
      </div>
    </div>
  );
}