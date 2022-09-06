import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import './style.css';

/* ⚠ Por favor leer el archivo readme 🙏*/
export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="El Rey de la Cerveza" />
    </>
  );
}
