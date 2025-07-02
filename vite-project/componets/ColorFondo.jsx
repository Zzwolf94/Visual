import { useState } from "react";

function ColorFondo(){
    const [color, setColor] = useState("blue");

    const cambiarColor = () => {
        setColor(color === "blue" ? "red" : "blue");
    };

    return (
        <div className="color-fondo" style={{ backgroundColor: color }}>
            <h1>El fondo es {color}!</h1>
            <button onClick={cambiarColor}>
                Cambiar Color
            </button>
        </div>
    )
};

export default ColorFondo;