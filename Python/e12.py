num = int(input("Ingrese un número: "))
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")

numeros = [1, -2, 3, 4, -5, 6, 7, -8, -9, 10]
for numero in numeros:
    if numero < 0:
        print(f"El número {numero} es negativo, se omite.")
        continue
    else:
        print(f"El número {numero} es positivo.")