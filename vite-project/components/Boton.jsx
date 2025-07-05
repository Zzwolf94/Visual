import { useState } from "react";

function BotonOnOff() {
    const [encendido, setEncendido] = useState(false);
    return (
        <div className="boton-on-off">
            <button onClick={() => setEncendido(!encendido)}>
                {encendido ? "Apagar" : "Encender"}
            </button>
            <h1>El botón está {encendido ? "encendido" : "apagado"}!</h1>
        </div>
    );
}

export default BotonOnOff;