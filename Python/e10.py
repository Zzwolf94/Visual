sumatorio = 0
numero = 0
def main():
    global sumatorio, numero
    while True:
        try:
            numero = int(input("Ingrese un número entero positivo (0 para salir): "))
            if numero < 0:
                print("Por favor, ingrese un número positivo.")
            elif numero == 0:
                break
            else:
                sumatorio += numero
                print(f"Sumatorio actual: {sumatorio}")
        except ValueError:
            print("Entrada no válida. Por favor, ingrese un número entero.")

main()
# Finalizar el programa