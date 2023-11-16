import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const register = async () => {
      try {
          const response = await axios.post('http://127.0.0.1:5000/register', {
              nombre: nombre,
              contrasena: contrasena,
              correo: correo,
          });
          console.log(response.data);
      } catch (error) {
          console.error('Error:', error);
      }
  }

  const goToHome = () => {
    navigate('/Login');
  }

  return (
    <div className='casaCactus'>
      <div className='text'>
        <div className='gradiente'></div>
        <div className='tituloLogin'>
          <h1>CREAR CUENTA</h1>
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
          <div className='correo-electronico'>
            <label>Correo:</label>
            <input className='correo-campo' type="text" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo electronico" />
          </div>
        </div>
        <div className='botonlogin'>
          <button onClick={register} className='xd'>Registrarse</button>
        </div>
        <div className='sesioneslogin'>
          <h3>tienes cuenta?</h3>
          <div className='rojologin'>
            <button onClick={goToHome} className='boton-inicio'>inicia sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
}
