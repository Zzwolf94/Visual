import { useState } from "react";

function Listas() {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [Tareas, setTareas] = useState([]);
  const añadirtarea = () => {
    if (nuevaTarea.trim() === "") return;
    setTareas([...Tareas, nuevaTarea]);
    setNuevaTarea("");
  };
  return (
    <div>
      <label htmlFor="text">Tarea: </label>
      <input
        type="text"
        id="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={añadirtarea}>Añadir Tarea</button>
      <div>
        <ul>
          {Tareas.map((item) => (
            <li className="item-lista" key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listas;
