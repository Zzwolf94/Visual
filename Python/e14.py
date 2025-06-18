def adivinaElNumero ():
    import random
    numero = random.randint(1, 100)
    intentos = 0
    print("Adivina el número entre 1 y 100")
    print(numero)    
    while True:
        if intentos == 5:
            print("Te has quedado sin intentos")
            break
        try:
            intento = int(input("Introduzca un numero"))
            if intento < 1 or intento > 100:
                print("Porfavor introduzca un numero valido")
            else:
                intentos += 1
                if intento == numero:
                    print("Has acertado!!")
                else:
                    print("Mala suerte, prueba de nuevo")
                    print(f"te quedan {5 - intentos} intentos")    
        except ValueError:
            print("Porfavor introduzca un numero valido")
adivinaElNumero()

    

