// ESTRUCTURA DE TAREAS
// {
//  nombre, prioridad, estado
// }
const lista = []
const crearbutton = document.getElementById('crearTarea');
crearbutton.addEventListener("click", () => crearTarea())

// function renderApp() {
//     const tablaTareas = document.getElementById("tablaTareas")
//     const prioridades = ["Normal", "Importante", "SuperUrgente"]
//     const estados = {
//         "pendiente": "Pendiente",
//         "progreso": "En progreso",
//         "completa": "Tarea completada"
//     }

//     cargarTareas().forEach((tarea, index) => {
//         const fila = document.createElement("tr");
//         const celdaindex = document.createElement("td");
//         const celdanombre = document.createElement("td");
//         const celdaprioridad = document.createElement("td");
//         const celdaestado = document.createElement("td");
//         const celdaboton = document.createElement("td");
//         const botonEliminar = document.createElement("button");
//         celdaindex.textContent = index + 1;
//         celdanombre.textContent = tarea.nombre;
//         celdaprioridad.textContent = prioridades[tarea.prioridad - 1];
//         celdaestado.textContent = estados[tarea.estado];
//         botonEliminar.textContent = "Eliminar";
//         botonEliminar.className = "btn-danger";
//         botonEliminar.addEventListener("click", () => fila.remove());
//         celdaboton.appendChild(botonEliminar);
//         fila.appendChild(celdaindex);
//         fila.appendChild(celdanombre); 
//         fila.appendChild(celdaprioridad);
//         fila.appendChild(celdaestado);
//         fila.appendChild(celdaboton);
//         tablaTareas.appendChild(fila);
        
//     })
// }

/**
 * Hace una llamada a añadirTareas y resetea el valor del input
 */
function crearTarea() {
    console.log("Añadiendo tarea...")
    const prioridades = ["Normal", "Importante", "SuperUrgente"]
    const userInput = document.getElementById("nombreTarea")
    const prioridadInput = document.getElementById("prioridadtarea")
    const estadoInput = document.getElementById("estadotarea")
    nuevalista = [{"nombre":userInput.value, "prioridad":Number(prioridadInput.value), "estado":estadoInput.value}]
    lista.push(nuevatarea)
    añadirTarea(userInput.value, Number(prioridadInput.value), estadoInput.value)
    userInput.value = ""
    const fila = document.createElement("tr");
    const celdaindex = document.createElement("td");
    const celdanombre = document.createElement("td");
    const celdaprioridad = document.createElement("td");
    const celdaestado = document.createElement("td");
    const celdaboton = document.createElement("td");
    const botonEliminar = document.createElement("button");
    celdaindex.textContent = index + 1;
    celdanombre.textContent = tarea.nombre;
    celdaprioridad.textContent = prioridades[nuevalista.prioridad - 1];
    celdaestado.textContent = estados[tarea.estado];
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn-danger";
    botonEliminar.addEventListener("click", () => fila.remove());
    botonEliminar.addEventListener("click", () => lista.splice(index, 1));
    celdaboton.appendChild(botonEliminar);
    fila.appendChild(celdaindex);
    fila.appendChild(celdanombre); 
    fila.appendChild(celdaprioridad);
    fila.appendChild(celdaestado);
    fila.appendChild(celdaboton);
    tablaTareas.appendChild(fila);
    
}

/**
 * La función crea un objeto con las propiedades de tarea (nombre, prioridad, estado) y lo guarda en localStorage
 * @param {string} nombre El nombre de la tarea
 * @param {number} prioridad La prioridad de la tarea
 * @param {string} estado El estado de la tarea
 * @returns 
 */
function añadirTarea(nombre, prioridad, estado) {
    if (nombre.length < 3 || nombre.length > 63) {
        console.warn("El nombre de la tarea debe tener entre 3 y 63 caracteres")
        return
    }
    console.log(prioridad)
    console.log(![1, 2 ,3].includes(prioridad))
    if (![1, 2 ,3].includes(prioridad)) {
        console.warn("Prioridad no es válida")
        return
    }

    if (!["pendiente", "progreso", "completa"].includes(estado)) {
        console.warn("El estado debe ser 'pendiente', 'progreso' o 'completa'")
        return
    }

    // const tareas = cargarTareas()
    lista.push({nombre, prioridad, estado})

    // guardarTareas(tareas)
}

function formatearTareas(tareas) {
    const tareasFormateadas = []

    tareas.forEach((tarea) => {
        tareasFormateadas.push(`<li>${tarea.nombre}</li>`)
    })

    return tareasFormateadas.join("")
}


// function eliminarTarea(index) {
//     const tareas = cargarTareas()

//     if (!tareas[index]) {
//         console.warn("Tarea no existe o el índice no es válido")
//         return
//     }
    
//     tareas.splice(index, 1)

//     guardarTareas(tareas)    
//     renderApp()
// }


// renderApp()
