contrasena = "maninguito"
def main():
    while True:
        global contrasena
        userinput = input("Ingrese la contraseña: ")
        userinput = userinput.lower()
        if userinput == contrasena:
            print("Contraseña correcta, bienvenido al programa.")
            break
        else:
            print("Contraseña incorrecta, acceso denegado.")
            continue


main()
# Finalizar el programa