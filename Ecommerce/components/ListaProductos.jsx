import React from "react";
import TarjetaProducto from "./TarjetaProducto";
import "./ListaProductos.css"

function ListaProductos({ productos, soloDisponibles = false, onCarrito }) {
  const productosFiltrados = soloDisponibles
    ? productos.filter(producto => producto.disponible)
    : productos;

  if (productosFiltrados.length === 0) {
    return <p>No hay Productos disponibles.</p>;
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