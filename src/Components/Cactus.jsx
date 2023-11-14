import React, { useState } from 'react';
import "./Cactus.css";

const Cactus = () => {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correo, setCorreo] = useState('');

  return (
    <div className='casaCactus'>
      <div className='text'>
      <div className='gradiente'>
        
        </div>
        <div className='tituloLogin'>
          <h1>CREAR CUENTA</h1>
        </div>
        <div className='cosaslogin'>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ingrese su nombre" />
          </div>
          <br />
          <div>
            <label>Contraseña:</label>
            <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Ingrese su contraseña" />
          </div>
          <br />
          <div>
            <label>Correo:</label>
            <input type="text" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Ingrese su correo electrónico" />
          </div>
        </div>
        <div className='botonlogin'>
          <button className='xd'>Registrarse</button>
        </div>
        <div className='sesioneslogin'>
          <h3>tienes cuenta?</h3>
          <div className='rojologin'>
            <h3>inicia sesion</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cactus;