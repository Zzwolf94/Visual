#!/usr/bin/env python3

def descuento():
    while True:
        try:
            precio_original = float(input("Precio original del producto: "))
            break
        except ValueError:
            print("Ingrese un puto número válido.")

    while True:
        try:
            porcentaje_descuento = float(input("Porcentaje de descuento: "))
            break
        except ValueError:
            print("Ingrese un puto número válido.")

    precio_final = precio_original - (precio_original * (porcentaje_descuento / 100))


    print(f"El precio final después de aplicar un descuento del {porcentaje_descuento}% es: {precio_final:.2f}")
descuento()

