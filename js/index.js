
const contenedorTarjetas = document.getElementById('productos-container');
// Crea tarjeta de producto en el DOM "Index"
function crearTarjetasProductosInicio (stockProductos){     
    stockProductos.forEach(producto => {
        const nuevoProducto =  document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button> 

        `
        contenedorTarjetas.appendChild(nuevoProducto);
        // Agrega producto al carrito.
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
        
    });
}
crearTarjetasProductosInicio(stockProductos);

