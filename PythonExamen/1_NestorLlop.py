def secuencial():
    nombre = input("Introduzca su nombre: ")
    while True:
        try:
            edad =int(input("Introduzca su edad: "))
            if edad < 0:
                print("Introduzca una edad valida")
            else:
                break
        except ValueError:
            print("Introduzca una edad valida")
    
    print(f"¡Hola {nombre}! Naciste aproximadamente en el año {2025-edad} ")
    if edad > 120:
        print(F"¿Tienes {edad} años? no te lo crees ni tu")
secuencial()