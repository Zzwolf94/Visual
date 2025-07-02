import { useState } from "react"; 

function MostrarTexto() {
    const [texto, setTexto] = useState("");
    return (
        <div className="mostrar-texto">
        <div className="input-container">
            <label htmlFor="text">Texto: </label>
            <input
            type="text"
            id="text"
            value={texto}
            onChange={e => setTexto(e.target.value)}
            />
            <br />
            <h1> Escribiste: {texto}!</h1>
        </div>
        </div>
    );
    }
    export default MostrarTexto;