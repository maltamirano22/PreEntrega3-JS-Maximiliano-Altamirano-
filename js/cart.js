

const contenedorTarjetas = document.getElementById('carrito-container');
const unidadesElement = document.getElementById('unidades');
const precioElement = document.getElementById('precio');



// Crea tarjeta de producto en el DOM "Carrito"
function crearTarjetasProductosInicio (){    
    contenedorTarjetas.innerHTML=""; 
    const prod1= JSON.parse(localStorage.getItem("stockProductos"));
    prod1.forEach(producto => {
        const nuevoProducto =  document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button>-</button> 
                <span class="cantidad">${producto.cantidad} </span> 
                <button>+</button>
            </div>
        `;
        //Suma producto al carrito.
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[1]
        .addEventListener("click",(e) => {
            agregarAlCarrito(producto);
            crearTarjetasProductosInicio();
           
        
        
        });
        //Resta producto al carrito.
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0]
        .addEventListener("click",(e) =>{  
        restarAlCarrito(producto);
        crearTarjetasProductosInicio();
      
        
    });
            
    });

}
crearTarjetasProductosInicio();
actualizarTotales();

