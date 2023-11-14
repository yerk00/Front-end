import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const navigate = useNavigate();

  const imagePath = import.meta.env.BASE_URL + 'Img/vegeta.png';

  return (
    <div className='imagen'>
      <img src={imagePath} alt='' />
    </div>
  );
}






































