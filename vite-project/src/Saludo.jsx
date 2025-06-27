import { useState } from "react";

function Saludo() {
  const [nombre, setNombre] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="saludo">
      <div className="input-container">
        <label htmlFor="text">Nombre:</label>
        <input
          type="text"
          id="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => setNombre(input)}>
          Enviar
        </button>
      </div>
      <h1>Hola, {nombre ? nombre : "mundo"}!</h1>
    </div>
  );
}

export default Saludo;
