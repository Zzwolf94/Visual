notas = {
    "mat0" : {"nombre":"lengua", "nota": 2},
    "mat1" : {"nombre":"fisica", "nota": 5},
    "mat2" : {"nombre":"mates", "nota": 7},
    "mat3" : {"nombre":"ciencias", "nota": 9},
    "mat4" : {"nombre":"historia", "nota": 10},
}
def menunotas ():
     global notas
     while True:
        try:
            print("1. Ingresar materia y nota")
            print("2. Mostrar promedio")
            print("3. Calificacion")
            print("4. Buscar por nombre")
            print("5. Salir")
            opcion = int(input("Seleccione una opción: "))
                
            if opcion == 1:
                materia = input("ingrese el nombre de la materia: ")
                ingresar_notas(int(input("ingrese la nota de la materia: ")),materia)
            elif opcion == 2:
                promedio()
            elif opcion == 3:
                calificacion()
            elif opcion == 4:
                buscar(input("nombre de la asignatura a consultar: "))
            elif opcion == 5:
                break
            else:
                print("Opción no válida")
        except ValueError:
            print("Ingrese un número válido.")

def ingresar_notas(nota,materia):
    global notas
    notas.update({f"mat{len(notas)}":{"nombre":materia, "nota": int(nota)}})
    print(notas[f"mat{len(notas) - 1}"])
def promedio():
    global notas
    media = 0
    total = 0
    totalmaterias = 0
    for x, obj in notas.items():
         total += obj["nota"]
         totalmaterias += 1
    media = total / totalmaterias
    print(f"la nota media es: {media}")
def calificacion():
    global notas
    for x, obj in notas.items():
        nota = obj["nota"]
        nombre = obj["nombre"]
        if nota < 5:
            print(f"{nombre} : Suspenso")
        elif nota > 4 and nota < 8:
            print(f"{nombre} : Aprobado")
        elif nota > 7 and nota <10:
            print(f"{nombre} : Notable")
        elif nota == 10:
            print(f"{nombre} : Sobresaliente")
def buscar(materia):
    materiaencontrada = ""
    for x, obj in notas.items():
        if materia == obj["nombre"]:
            print(f"La nota de {obj['nombre']} es {obj['nota']}")
            materiaencontrada = obj["nombre"]
    if materiaencontrada == "":
        print("No se encontro la materia")



menunotas()