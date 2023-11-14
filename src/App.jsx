import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageRegister from './PageRegister.jsx';
import PageLogin from './PageLogin.jsx';
import Home from './Home.jsx'
import Navbar from './Components/Nav.jsx'  // Importa el componente Navbar
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/Registro" element={<PageRegister/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<PageLogin/>} />
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


