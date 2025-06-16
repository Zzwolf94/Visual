
def menu():
     productos = {
    "agua":1.0,
    "cola":2.0,
    "naranja":2.0,
    "limon":2.0,
    "te":2.5
    }
     while True:
        try:
            print("1. Agua(1.00.$)")
            print("2. Cola(2.00.$)")
            print("3. Naranja(2.00.$)")
            print("4. Limon(2.00.$)")
            print("5. Te(2.50.$)")
            print("6. Salir")
            print("")
            opcion = int(input("Seleccione una opción: "))
            print("")

                
            if opcion == 1:
                print("Ha selecionado Agua (1.00$)")
                pedirdinero(float(productos["agua"]))
            elif opcion == 2:
                print("Ha selecionado Cola (2.00$)")
                pedirdinero(float(productos["cola"]))
            elif opcion == 3:
                print("Ha selecionado Naranja (2.00$)")
                pedirdinero(float(productos["naranja"]))
            elif opcion == 4:
                print("Ha selecionado Limon (2.00$)")
                pedirdinero(float(productos["limon"]))
            elif opcion == 5:
                print("Ha selecionado Te (2.50$)")
                pedirdinero(float(productos["te"]))
            elif opcion == 6:
                break
            else:
                print("Opción no válida")
        except ValueError:
            print("Ingrese un número válido.")
def pedirdinero(producto):
    print("Porfavor inserte dinero")
    dinero = 0.0
    pagado = 0.0
    while True:
        try:
            print("")
            print(f"Cantidad actual {pagado} $")
            print("")
            print("1. Introducir dinero")
            print("2. Pagar")
            print("3. Salir")
            print("")

            opcion = int(input("Elija una opcion: "))
                
            if opcion == 3:
                print("Saliendo de la compra")
                print(f"Devolviendo: {pagado}")
                break
            elif opcion == 2:
                if pagado >= producto:
                    print(f"Producto comprado, devolviendo {pagado - producto}")
                    break
                else:
                    print("Dinero insuficiente")
            elif opcion == 1:
                dinero = float(input("Introduzca moneda (0.50, 1.00, 2.00): "))
                if float(dinero) == 0.5:
                    pagado += float(dinero)
                elif dinero == 1.0:
                    pagado += float(dinero)
                elif dinero == 2.0:
                    pagado += float(dinero)
                else:
                    print("Introduzca una opcion valida")
            else:
                print("Introduzca una opcion valida")
        except ValueError:
            print("Introduzca una opcion valida")
    
menu()