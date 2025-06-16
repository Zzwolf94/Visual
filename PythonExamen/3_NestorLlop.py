def bucles():
    contador=1
    while True:
        try:
            numero = int(input("Introduzca un numero entero positivo: "))
            if numero < 0:
                print("Introduzca un numero valido")
            else:
                break
        except ValueError:
            print("Introduzca un numero valido")
    print(f"Tabla de multiplicar del {numero}: ")
    while contador <= 10 :
        print(f"{numero} x {contador} = {numero*contador}")
        contador += 1
bucles()