// ESTRUCTURA DE TAREAS
// {
//  nombre, prioridad, estado
// }


function renderApp() {
    const tablaTareas = document.getElementById("tablaTareas")
    tablaTareas.innerHTML = ""
    const prioridades = ["Normal", "Importante", "SuperUrgente"]
    const estados = {
        "pendiente": "Pendiente",
        "progreso": "En progreso",
        "completa": "Tarea completada"
    }

    cargarTareas().forEach((tarea, index) => {
        tablaTareas.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${tarea.nombre}</td>
                    <td>${prioridades[tarea.prioridad - 1]}</td>
                    <td>${estados[tarea.estado]}</td>
                    <td>
                        <button class="btn-danger" onclick="eliminarTarea(${index})">Eliminar</button>
                </tr>
        `
    })
}

/**
 * Hace una llamada a añadirTareas y resetea el valor del input
 */
function crearTarea() {
    console.log("Añadiendo tarea...")
    const userInput = document.getElementById("nombreTarea")
    const prioridadInput = document.getElementById("prioridadtarea")
    const estadoInput = document.getElementById("estadotarea")
    añadirTarea(userInput.value, Number(prioridadInput.value), estadoInput.value)
    userInput.value = ""

    renderApp()
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

    const tareas = cargarTareas()
    tareas.push({nombre, prioridad, estado})

    guardarTareas(tareas)
}

function formatearTareas(tareas) {
    const tareasFormateadas = []

    tareas.forEach((tarea) => {
        tareasFormateadas.push(`<li>${tarea.nombre}</li>`)
    })

    return tareasFormateadas.join("")
}


function eliminarTarea(index) {
    const tareas = cargarTareas()

    if (!tareas[index]) {
        console.warn("Tarea no existe o el índice no es válido")
        return
    }
    
    tareas.splice(index, 1)

    guardarTareas(tareas)    
    renderApp()
}


renderApp()