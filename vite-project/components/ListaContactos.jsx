import React from "react";
import TarjetaContacto from "./TarjetaContacto";

function ListaContactos({ contactos, soloActivos = false }) {
  const contactosFiltrados = soloActivos
    ? contactos.filter(contacto => contacto.activo)
    : contactos;

  if (contactosFiltrados.length === 0) {
    return <p>No hay contactos disponibles.</p>;
  }

  return (
    <div className="lista-contactos">
      {contactosFiltrados.map(contacto => (
        <TarjetaContacto
          key={contacto.id}
          {...contacto}
        />
      ))}
    </div>
  );
}

export default ListaContactos;