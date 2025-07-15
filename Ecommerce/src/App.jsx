
import './App.css'
import Header from '../components/Header'
import { productos } from '../components/Productos'
import ListaProductos from '../components/ListaProductos'
import { useState } from 'react'

function App() {
 const [soloDisponibles, setSoloDisponibles] = useState(false);

 const [soloLaptops, setSoloLaptops] = useState(false)

  const toggleSoloDisponibles = () => {
    setSoloDisponibles(prev => !prev);
    };

  const toggleLaptops = () => {
    setSoloLaptops(prevL => !prevL)
  }

  const [Carrito, setCarrito] = useState([])

  const [busqueda, setBusqueda] = useState("")

  const [btnBusqueda, setbtnBusqueda] = useState("")

  const addCarrito = (producto) => {
    if (!Carrito.find(p => p.id === producto.id)) {
    setCarrito([...Carrito, producto]);
    }
  }

  return (
    <div className='App'>
      <Header busqueda={busqueda} setBusqueda={setBusqueda} setbtnBusqueda={setbtnBusqueda}/>
      <main>
        <div>
      <button onClick={toggleSoloDisponibles}>
        {soloDisponibles ? "Mostrar Todos":"Mostrar disponibles"}
      </button>
      <button onClick={toggleLaptops}>
        {soloLaptops ? "Mostrar Todos":"Laptops"}
      </button>
      </div>
      <ListaProductos productos={productos} soloDisponibles={soloDisponibles} onCarrito={addCarrito} btnBusqueda={btnBusqueda} soloLaptops={soloLaptops}/>
      </main>
      <footer>
      {Carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        Carrito.map(c => <p key={c.id}>🛒 {c.nombre}</p>)
      )}
      </footer>
      </div>
  )
}

export default App
