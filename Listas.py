lista = []

def add_elemento(elemento):
    global lista
    lista.append(elemento)

def ver_lista():
    global lista
    if not lista:
        print("La lista está vacía.")
    else:
        print("Lista de elementos:")
        for elemento in lista:
            print(elemento) 

def quitar_elemento(elemento):
    global lista
    if elemento in lista:
        lista.remove(elemento)
        print(f"Elemento {elemento} eliminado de la lista.")
    else:
        print(f"Elemento {elemento} no encontrado en la lista.")

def main():
    while True:
        try:
            print("1. Ver lista")
            print("2. Agregar elemento")
            print("3. Quitar elemento")
            print("4. Salir")
            opcion = int(input("Seleccione una opción: "))
                
            if opcion == 1:
                ver_lista()
            elif opcion == 2:
                add_elemento(input("Añada un elemento a la lista: "))
            elif opcion == 3:
                quitar_elemento(input("Ingrese el elemento a quitar de la lista: "))
            elif opcion == 4:
                break
            else:
                print("Opción no válida")
        except ValueError:
            print("Ingrese un número válido.")

main()