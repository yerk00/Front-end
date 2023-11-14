import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css'

export default function Registro() {
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');

    const register = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/register', {
                nombre: nombre,
                contrasena: contrasena,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='body'>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
            <button onClick={register}>Registrarse</button>
        </div>
    );
}
