
import './App.css'
import React from 'react';
import Lista from './Lista.jsx';
import Navbar from './Navbar.jsx';



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
    </>
  )
}

export default App


