
const contenedorTarjetas = document.getElementById("productos-container");
// CREA TARJETA PRODUCTO EN EL HTML
function crearTarjetasProductosInicio (stockProductos){
    stockProductos.forEach(producto => {
        const nuevoProducto =  document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <img src="../assets/images/productos/${producto.id}.png">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button> 

        `
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
        
    });
}
crearTarjetasProductosInicio(stockProductos);