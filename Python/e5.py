def edad_de_viaje(edad):
         
    if edad <= 2:
        tarifa = "Tarifa gratuita"
    elif edad >= 3 and edad <= 12:
        tarifa = "Tarifa infantil"
    else:
        tarifa = "Tarifa adulta"
    return print(tarifa) 

while True:
    try:
        edad_de_viaje(int(input("Ingrese su edad: ")))
        break
    except ValueError:
        print("Ingrese un puto número válido.")

