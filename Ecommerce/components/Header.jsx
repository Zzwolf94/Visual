import "./Header.css";

function Header({busqueda, setBusqueda, setbtnBusqueda}) {
  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  const confirmarBusqueda = () =>{
    setbtnBusqueda(busqueda)
  }

  const limpiarBusqueda =() => {
    setbtnBusqueda("")
  }
  return (
    <header>
      <div>
        <h1>E-Commerce</h1>
      </div>
      <div>
        <input type="text" placeholder="Search" value={busqueda} onChange={manejarCambio}/>
        <button onClick = {confirmarBusqueda}>buscar</button>
        <button onClick = {limpiarBusqueda}>Limpiar Busqueda</button>
      </div>
      <div>
        <button>Carrito</button>
      </div>
    </header>
  );
}

export default Header;

