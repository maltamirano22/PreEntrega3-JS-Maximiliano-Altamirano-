function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("stockProductos"));
    console.log(memoria);
    if (!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("stockProductos",JSON.stringify([nuevoProducto]));
    } else{
        const indiceProducto = memoria.findIndex(prod => prod.id === producto.id);
        console.log (indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        } else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("stockProductos",JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}
//* Toma un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria (producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const CuentaCarritoElement=document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("stockProductos"));
    const cuenta = memoria.reduce((acum,current)=> acum+current.cantidad,0);
    CuentaCarritoElement.innerText=cuenta;

}
actualizarNumeroCarrito();