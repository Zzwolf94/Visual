const productos = [
      { id: 1, nombre: "Camisa roja", precio: 20, img : "../assets/camiseta1.jpg" },
      { id: 2, nombre: "Camiseta dibujo", precio: 20, img : "../assets/camiseta2.jpg" },
      { id: 3, nombre: "Camiseta gris", precio: 30, img : "../assets/camiseta3.jpg" }
    ];
const carrito = [];
function tienda() {
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const maincontainer = document.getElementById('productos');
        const contenedor = document.createElement('div');
        contenedor.className = 'contenedor-imagen';
        const imagen = document.createElement('img');
        imagen.src = producto.img;
        imagen.alt = producto.nombre;
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        const precio = document.createElement('p');
        precio.textContent = producto.precio + '€';
        const boton = document.createElement('button');
        boton.textContent = 'Añadir al carrito';
        // boton.addEventListener('click', () => {
        //     alert(`Añadido al carrito: ${producto.nombre}`)});
        boton.addEventListener('click', () => añadirAlCarrito(producto));
        
        contenedor.append(imagen, nombre, precio, boton);
        maincontainer.append(contenedor);
    } 
  };

function añadirAlCarrito(producto) {
    console.log(`Producto añadido al carrito: ${producto.nombre}`);
    
    if (carrito.some(p => p.id === producto.id)) {
        const item = carrito.find(p => p.id === producto.id);
        item.cantidad += 1;
        console.log(`Cantidad actualizada: ${item.cantidad}`);
    }
    else {
        producto.cantidad = 1; 
        carrito.push(producto);
    }
    console.log(`Carrito actual: ${carrito.map(p => p.nombre).join(', ')}`);
    mostrarcarrito();
}
function mostrarcarrito() {
    const carritocontainer = document.getElementById('carrito');
    carritocontainer.innerHTML = "";
    document.getElementById('carrito');
    for (let i = 0; i < carrito.length; i++) {
        const compra = carrito[i]
        const carritocontainer = document.getElementById('carrito');
        const container = document.createElement('div');
        container.className = 'contenedor-imagen';
        const imagen = document.createElement('img');
        imagen.src = compra.img;
        imagen.alt = compra.nombre;
        const nombre = document.createElement('h2');
        nombre.textContent = compra.nombre;
        const precio = document.createElement('p');
        precio.textContent = compra.precio + '€';
        const botonmenos = document.createElement('button');
        botonmenos.textContent = '-';
        const cant = document.createElement('p');
        cant.textContent = compra.cantidad
        const botonmas = document.createElement('button');
        botonmas.textContent = '+';
        container.append(imagen, nombre, precio, cant, botonmenos, botonmas);
        carritocontainer.append(container);
        botonmenos.addEventListener('click', () => { 
            compra.cantidad -= 1
            console.log(compra.cantidad)
            if (compra.cantidad == 0){carrito.splice(i, 1)} 
            mostrarcarrito()
        });
        botonmas.addEventListener('click', () => {
            compra.cantidad += 1
            mostrarcarrito()
        }); 
        
    }
    preciofinal()
}

function preciofinal(){
    const containertotal = document.getElementById('total')
    containertotal.innerHTML = "";
    let preciofinal = 0
    for (let i = 0; i < carrito.length; i++) {
        const cantidad = carrito[i].cantidad
        const precio = carrito[i].precio
        preciofinal += precio * cantidad
    }
    const total = document.createElement('h2');
    total.textContent = 'Total '+ preciofinal;
    containertotal.append(total)
}
  
tienda();