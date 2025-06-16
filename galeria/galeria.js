
function agregarImagen() { 
    const urlImagen = document.getElementById('url-imagen').value;
    const desc = document.getElementById('descripcion').value;
    
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = urlImagen; 
    nuevaImagen.alt = 'Imagen de la galería';
    
    const galeria = document.getElementById('galeria');
    const descripcion = document.createElement('h1');
    descripcion.textContent = desc;
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-imagen';
    const responsive = document.createElement('article');
    responsive.className = 'responsive';
    const deletebutton = document.createElement('button');
    deletebutton.className = 'delete-button';
    deletebutton.textContent = 'Eliminar'+urlImagen;
    deletebutton.addEventListener('click', () => responsive.remove());
    contenedor.append(nuevaImagen, descripcion, deletebutton);
    responsive.append(contenedor);
    galeria.append(responsive);

    
    document.getElementById('url-imagen').value = '';

}