def cual_es_mayor(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        print(f"El número mayor es: {num1}")
    elif num2 > num1 and num2 > num3:
        print(f"El número mayor es: {num2}")
    elif num3 > num1 and num3 > num2:
        print(f"El número mayor es: {num3}")
    else:
        print("Hay números iguales")

while True:
    try:
        cual_es_mayor(int(input("ingrese el primer numero: ")), int(input("ingrese el segundo numero: ")), int(input("ingrese el tercer numero: ")))
        break
    except ValueError:
        print("Ingrese un puto número válido.")

