    const buscarInput = document.getElementById('buscar');
    const resultadoDiv = document.getElementById('resultado');

    // Evento para detectar cambios en el campo de búsqueda
    buscarInput.addEventListener('input', () => {
        const filtro = buscarInput.value.toLowerCase();

        const productoEncontrado = productos.find(producto => 
            producto.nombre.toLowerCase().includes(filtro)
        );

        if (productoEncontrado) {
            resultadoDiv.innerHTML = 
            `
            <p>Producto encontrado: </p>
            <p> ${productoEncontrado.nombre}</p>
            <p>Precio: $ ${productoEncontrado.precio}</p> 

            `;
        } else {
            resultadoDiv.textContent = 'No se encontró ningún producto.';
        }
    });

