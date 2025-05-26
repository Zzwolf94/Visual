total = 1000
tries = 0
def sacar_dinero(cantidad):
    global total
    if cantidad > total:
        print("No hay suficiente dinero en la cuenta")
    elif cantidad < 0:
        print("No se puede retirar una cantidad negativa")
    else:
        total -= cantidad
        print(f"Se ha retirado {cantidad} de la cuenta")

def mostrar_saldo():
    print(f"El saldo actual es: {total}")

def ingresar_dinero(cantidad):
    global total
    if cantidad <= 0:
        print("No se puede ingresar una cantidad negativa")
    else:
        total += cantidad
        print(f"Se ha ingresado {cantidad} a la cuenta")
while True:
    try:
        password = int(input("intoduzca su munero secreto: "))
        if password == 1234:
            print("Bienvenido al cajero")
            break
        else:
            print("Contraseña incorrecta")
            tries = tries + 1
    except ValueError:
        print("Ingrese un número válido.")
       # ---------------------------------------------
while True:
    try:
        print("1. Ingresar dinero")
        print("2. Retirar dinero")
        print("3. Mostrar saldo")
        print("4. Salir")
        opcion = int(input("Seleccione una opción: "))
            
        if opcion == 1:
            ingresar_dinero(int(input("la cantidad a ingresar: ")))
        elif opcion == 2:
            sacar_dinero(int(input("la cantidad a retirar: ")))
        elif opcion == 3:
            mostrar_saldo()
        elif opcion == 4:
            break
        else:
            print("Opción no válida")
    except ValueError:
        print("Ingrese un número válido.")

