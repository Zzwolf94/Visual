import React from "react";
import TarjetaProducto from "./TarjetaProducto";
import "./ListaProductos.css"

function ListaProductos({ productos, soloDisponibles = false, onCarrito, btnBusqueda, soloLaptops }) {
  // const productosFiltrados = soloDisponibles
  //   ? productos.filter(producto => producto.disponible)
  //   : productos;
   const productosFiltrados = productos.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(btnBusqueda.toLowerCase());
    const esLaptop = soloLaptops ? p.categoria.includes("laptops") : true;
    const cumpleDisponibilidad = soloDisponibles ? p.disponible : true;
    return coincideNombre && cumpleDisponibilidad && esLaptop;
  });
  

  if (productosFiltrados.length === 0) {
    return <div className="lista-Productos"><p className="noDisp">No hay Productos disponibles.</p></div>;
  }

  return (
    <div className="lista-Productos">
      {productosFiltrados.map(producto => (
        <TarjetaProducto
          key={producto.id}
          {...producto}
          onCarrito ={() => onCarrito(producto)}
        />
      ))}
    </div>
  );
}

export default ListaProductos;