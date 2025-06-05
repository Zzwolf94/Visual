# producto = {"nombre": "Laptop", "precio": 1200, "cantidad": 5}
# def mostrar_producto():
#     global producto
#     print(f"Nombre: {producto['nombre']}")
#     print(f"Precio: ${producto['precio']}")
#     print(f"Cantidad: {producto['cantidad']}")

# def modificar_producto():
#     global producto
#     producto['cantidad'] = int(input("Ingrese la nueva cantidad: "))
#     print("Producto modificado exitosamente.")

# def agregarcategoria():
#     global producto
#     categoria = input("Ingrese la categoría del producto: ")
#     valor = input("Ingrese el valor de la categoría: ")
#     producto[categoria] = valor
#     print("Categoría agregada exitosamente.")

# def mostrar_valores():
#     global producto
#     print("Valores del producto:")
#     for key, value in producto.items():
#         print(f"{key}: {value}")

# mostrar_valores()

empleados = {
"emp01": {"nombre": "Laura", "salario": 2500, "cargo":
"Diseñadora"},
"emp02": {"nombre": "Carlos", "salario": 3000, "cargo":
"Programador"},
"emp03": {"nombre": "Elena", "salario": 2800, "cargo":
"Tester"}
}
def mostrar_nombres():
    global empleados
    print("Nombres de los empleados:")
    for emp in empleados:
        print(empleados[emp]["nombre"])
    print(empleados.get("emp02")["cargo"])
    empleados.update({"emp03": {"salario": 3200}})
    empleados.pop("emp01")
    for emp in empleados:
        print(empleados[emp]["nombre"])
        print(empleados[emp]["salario"])

mostrar_nombres()