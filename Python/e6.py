def pares(num1, num2):
         
    if num1 % 2 == 0 and num2 % 2 == 0:
        print("Ambos números son pares")
    elif num1 % 2 == 0:
        print("El primer número es par")
    elif num2 % 2 == 0:
        print("El segundo número es par")
    else:
        print("Ninguno de los números es par")

while True:
    try:
        pares(int(input("ingrese el primer numero: ")), int(input("ingrese el segundo numero: ")))
        break
    except ValueError:
        print("Ingrese un puto número válido.")

