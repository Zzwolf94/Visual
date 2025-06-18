
def triangulo():
    altura = int(input("De que altura desea el triangulo? "))
    for i in range(1, altura + 1):
        espacios = ' ' * (altura - i)
        estrellas = '*' * (2 * i - 1)
        print(espacios + estrellas)

triangulo()

def saludo(nombre):
    print("hola "+ nombre +" !!!")

saludo(input("digame su nombre porfavor "))