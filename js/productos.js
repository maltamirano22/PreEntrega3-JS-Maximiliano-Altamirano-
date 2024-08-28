const productos = [
{
    id:1,
    nombre:"Cortante",
    precio:10000,
    cantidad: 30,
},
{
    id:2,
    nombre:"Shot-Head",
    precio:4000,
    cantidad: 20,
},
{
    id:3,
    nombre:"Shot-Skull",
    precio:4500,
    cantidad: 15,
},
{
    id:4,
    nombre:"Sorbetes",
    precio:1500,
    cantidad: 10,
},
{
    id:5,
    nombre:"Sprinkles",
    precio:11000,
    cantidad: 9,
},
{
    id:6,
    nombre:"Stencil-Calabaza",
    precio:6000,
    cantidad: 8,
},
{
    id:7,
    nombre:"Set-x-12-velas",
    precio:5000,
    cantidad: 7,
},
{
    id:8,
    nombre:"Velas-Bicolor",
    precio:5500,
    cantidad: 6,
},
{
    id:9,
    nombre:"Velas-Con-Lunares",
    precio:6300,
    cantidad: 5,
},
{
    id:10,
    nombre:"Velas-Metalizadas",
    precio:4500,
    cantidad: 6,
},
{
    id:11,
    nombre:"Waflera-Square",
    precio:55000,
    cantidad: 7,
},
{
    id:12,
    nombre:"Waflera-Sweetheart",
    precio:65000,
    cantidad: 8,
},
{
    id:13,
    nombre:"Molde-Autumn-Cakelet",
    precio:4000,
    cantidad: 0,
},
{
    id:14,
    nombre:"Molde-Autumn-Delights",
    precio:10000,
    cantidad: 0,
},
{
    id:15,
    nombre:"Molde-Autumn-Treats",
    precio:8000,
    cantidad: 0,
},
{
    id:16,
    nombre:"Molde-Autumn-Wreath",
    precio:6000,
    cantidad: 0,
},
]
console.log(productos);
const stockProductos = productos.filter(function(producto){
    return producto.cantidad > 0;
    });
    console.log(stockProductos)