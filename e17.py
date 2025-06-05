def multiplos():
    for i in range(0, 31):
        if i % 3 == 0 and i % 5 == 0:
            print("Tres y Cinco")
        elif i % 3 == 0:
            print("Tres")
        elif i % 5 == 0:
            print("Cinco")
        else:
            print(i)


def maximo():
    lista = [6, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numero = 0
    while True:
        menu = input("Quieres añadir un numero a la lista y/n: ")
        if menu == "y":
            try:
                lista.append(int(input("Inserte un numero en la lista: ")))
            except ValueError:
                print("Valor no numerico")
        elif menu == "n":
            print("Cerrando programa")
            break
        else:
            print("Elija una de las opciones")
    for i in range(len(lista)):
            if numero < lista[i]:
                numero = lista[i]
    print("El numero mas grande de la lista es: ", numero)        
maximo()