
import './App.css'
import Header from '../components/Header'
import { productos } from '../components/Productos'
import ListaProductos from '../components/ListaProductos'
import { useState } from 'react'

function App() {
 const [soloDisponibles, setSoloDisponibles] = useState(false);

  const toggleSoloDisponibles = () => {
    setSoloDisponibles(prev => !prev);
    };
  const [Carrito, setCarrito] = useState([])
  
  const addCarrito = (producto) => {
    if (!Carrito.find(p => p.id === producto.id)) {
    setCarrito([...Carrito, producto]);
    }
  }

  return (
    <div className='App'>
      <Header carCount={5} />
      <div className='Main'>
        <div>
      <button onClick={toggleSoloDisponibles}>
        {soloDisponibles ? "Mostrar Todos":"Mostrar disponibles"}
      </button>
      </div>
      <ListaProductos productos={productos} soloDisponibles={soloDisponibles} onCarrito={addCarrito}/>
      </div>
      <div>
      {Carrito.length === 0 ? (
        <p>No hay contactos agregados.</p>
      ) : (
        Carrito.map(c => <p key={c.id}>🛒 {c.nombre}</p>)
      )}
      </div>
      </div>
  )
}

export default App
