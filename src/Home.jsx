import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='HomeBar'>
            <div className='Homenavbar'>
                <h1> <span>UFC </span>GYM BOLIVIA</h1>
                <button onClick={() => navigate('/Gestion')}>Gestion de usuarios</button>
                <button onClick={() => navigate('/Instructores')}>Gestion de instructores</button>
                <button onClick={() => navigate('/Informacion')}>Informacion</button>
                <button onClick={() => navigate('/Casilleros')}>Casilleros </button>
                <button onClick={() => navigate('/Productos')}>Productos</button>
                <button onClick={() => navigate('/Resenas')}>Resenas</button>
            </div>
            <div className='TopHomeBar'>
            </div>
        </div>
    );
}