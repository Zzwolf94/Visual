def listaInvertida():
    lista = []
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
    lista.reverse()
    print(lista)
listaInvertida()






    

