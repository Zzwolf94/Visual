import React from "react";
import "../estilos.css";

function TarjetaContacto({ nombre, email, telefono, activo, avatar }) {
  return (
    <div className={`tarjeta-contacto ${activo ? "activo" : "inactivo"}`}>
      <img src={avatar} alt={nombre} className="avatar" />
      <h3>{nombre}</h3>
      <p>📧 {email}</p>
      <p>📞 {telefono}</p>
      <p>
        Estado: {activo ? "🟢 Activo" : "🔴 Inactivo"}
      </p>
    </div>
  );
}

export default TarjetaContacto;