def edad_de_viaje():
    while True:
        try:
            edad = int(input("Ingrese su edad: "))
            break
        except ValueError:
            print("Ingrese un puto número válido.")
    if edad <= 2:
        tarifa = "Tarifa gratuita"
    elif edad >= 3 and edad <= 12:
        tarifa = "Tarifa infantil"
    else:
        tarifa = "Tarifa adulta"
    return print(tarifa) 
edad_de_viaje()
   