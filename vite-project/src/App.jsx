import React from "react";
import ListaContactos from "../components/ListaContactos.jsx";
import { contactos } from "../data/contactos.jsx";

function App() {
  return (
    <div className="App">
      <h1>📇 Lista de Contactos</h1>
      <ListaContactos contactos={contactos} soloActivos={false} />
    </div>
  );
}

export default App;

