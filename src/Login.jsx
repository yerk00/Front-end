import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                nombre: nombre,
                contrasena: contrasena,
            });
            console.log(response.data);
            if (response.data.message === 'login successful') {
                navigate('/Home');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

 /*  const goToHome = () => {
    navigate('/Home');
  } */

  return (
    <div className='casaCactus'>
      <div className='text'>
        <div className='gradiente'></div>
        <div className='tituloLogin'>
          <h1>LOGIN</h1>
        </div>
        <div className='cosaslogin'>
          <div className='nombre'>
            <label>Nombre:</label>
            <input className='input-name' type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
          </div>
          <div className='contrasena'>
            <label>Contraseña:</label>
            <input className='pass' type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
          </div>
        </div>
        <div className='botonlogin'>
          <button onClick={login} className='xd'>Login</button>
        </div>
        <div className='sesioneslogin'>
          <h3>tienes cuenta?</h3>
          
        </div>
      </div>
    </div>
  );
}
