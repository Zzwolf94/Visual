import React from "react";
import ListaContactos from "../components/ListaContactos.jsx";
import Contador from "../components/Contador.jsx";
import Reloj from "../components/Reloj.jsx"

function App() {
  return (
    <div className="App">
      <Contador/>
      <div>
        <Reloj/>
      </div>
    </div>
  );
}

export default App;

