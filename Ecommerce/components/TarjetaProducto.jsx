import React from "react";
import "./TarjetaProducto.css"


function TarjetaProducto({ nombre, precio, imagen, categoria, disponible, descripcion, marca, stock, valoracion, onCarrito}) {
  return (
    <div className={`tarjeta-producto ${disponible ? "activo" : "inactivo"}`}>
      <img src={imagen} alt={nombre} className="imagen" />
      <h3>{nombre}</h3>
      <p className="Desc">{descripcion}</p>
      <p>{marca}</p>
      <p className="rating">{valoracion}</p>
      <p> {precio} €</p>
      <p>{categoria}</p>
      <p>
        <button  onClick={onCarrito}>Añadir al carrito</button>
        Stock: {stock}{disponible ? "🟢" : "🔴"}
      </p>
    </div>
  );
}

export default TarjetaProducto;