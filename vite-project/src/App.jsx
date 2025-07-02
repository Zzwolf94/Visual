
import './App.css'
import React from 'react';
import Lista from './Lista.jsx';
import Navbar from './Navbar.jsx';
import Saludo from './Saludo.jsx';
import MostrarTexto from '../componets/MostrarTexto.jsx';
import Contador from '../componets/Contador.jsx';
import BotonOnOff from '../componets/Boton.jsx';
import ColorFondo from '../componets/ColorFondo.jsx';
import Listas from '../componets/Listas.jsx';


function App() {
const itemsCompra =
[{ id: '0', name: 'amiseta', price: '10.00' },
  { id: '1', name: 'Pantalon', price: '20.00' },
  { id: '2', name: 'Zapato', price: '30.00' },
  { id: '3', name: 'Gorra', price: '15.00' }
];

  return (
    <>
      <Navbar />
    <div className="app-container">
      <Lista items={itemsCompra} />
      <Lista items={itemsCompra} />
    </div>
    <div className="app-container">
      <Saludo />
      <MostrarTexto />
    </div>
    <div className="app-container">
      <Contador />
      <BotonOnOff />
    </div>
    <div className="app-container">
      <ColorFondo />
    </div>
    <div className="app-container">
      <Listas />
    </div>
    </>
  )
}

export default App

