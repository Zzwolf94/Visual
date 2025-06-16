def condicional():
    while True:
        try:
            nota = int(input("Introduzca su nota (0 - 100): "))
            if nota < 0:
                print("Introduzca una nota valida")
            elif nota > 100:
                print("Introduzca una nota valida")
            else:
                break
        except ValueError:
            print("Introduzca una nota valida")
    if nota >= 0 and nota < 50:
        print("Tu calificacion es: Suspenso")
    elif nota > 49 and nota < 70:
        print("Tu calificacion es: Aprobado")
    elif nota > 69 and nota < 90:
        print("Tu calificacion es: Notable")
    elif nota > 89 and nota < 101:
        print("Tu calificacion es: Sobresaliente")
    
condicional()