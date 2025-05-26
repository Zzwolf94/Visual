const tareas_pendientes = [];
const tareas_completadas = [];
const textomenu =
  "Seleccione una opción:\n1. Añadir tarea\n2. Ver tareas pendientes\n3. Ver tareas completadas\n4. Completar tarea\n5. Salir";

function CrearTarea() {
  const tarea = prompt("Ingrese la tarea:");
  tareas_pendientes.push(tarea);
}
function VerTareasPendientes() {
  if (tareas_pendientes.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    let texto = "";
    tareas_pendientes.forEach(tarea => texto += tarea + " \n");
    alert(texto)
  }
}
function VerTareasCompletadas() {
  if (tareas_pendientes.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    let texto = "";
    tareas_completadas.forEach(tarea => texto += tarea + " \n");
    alert(texto)
  }
}
function CompletarTarea(){
    if (tareas_pendientes.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    let completadas = "";
    tareas_pendientes.forEach((tarea, index) => completadas += index + " " + tarea + " \n");
    alert(completadas)
  }

}
function main() {
  let salir = true;
  while (salir === true) {
    const userinput = prompt(textomenu);
    switch (userinput) {
      case "1":
        // Añadir tarea
        CrearTarea();
        alert("Tarea añadida correctamente");
        break;
      case "2":
        // Ver tareas pendientes
        VerTareasPendientes();
        break;
      case "3":
        // Ver tareas completadas
        VerTareasCompletadas();
        break;
      case "4":
        // Completar tarea
        CompletarTarea();
        break;
      case "5":
        // Salir
        alert("Saliendo del programa");
        salir = false;
        break;
      default:
        alert("Opción no válida");
        break;
    }
  }
}

main()
