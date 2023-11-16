import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageRegister from './PageRegister.jsx';
import PageLogin from './PageLogin.jsx';
import Home from './Home.jsx'
import Navbar from './Components/Nav.jsx'  // Importa el componente Navbar
import './App.css'
import { Casilleros } from './Modulos/Casilleros';
import { Gestion } from './Modulos/Gestion';
import { Informacion } from './Modulos/Informacion';
import { Instructores } from './Modulos/Instructores';
import { Productos } from './Modulos/Productos';
import { Resenas } from './Modulos/Resenas';
import InformacionUfc from './InformacionUfc.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/Registro" element={<PageRegister/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<PageLogin/>} />
        <Route path="/Gestion" element={<Gestion/>} />
        <Route path="/Instructores" element={<Instructores/>} />
        <Route path="/Informacion" element={<Informacion/>} />
        <Route path="/Casilleros" element={<Casilleros/>} />
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/Resenas" element={<Resenas/>} /> 
        <Route path="/UFC" element={<InformacionUfc/>} /> 
 
        

        <Route path="/" element={
          <>
            <Navbar />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App


