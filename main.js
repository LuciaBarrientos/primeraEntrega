// declaración de productos

class Producto {
    constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [];

productos.push (new Producto ("remera", 1500));
productos.push (new Producto ("pantalon", 4000));
productos.push (new Producto ("buzo", 3500));


//Bienvenida

alert("Bienvenido a TIENDA MAGS. \n\nNUESTROS PRODUCTOS: \nRemera, Pantalon, Buzo.");

let accion = prompt ("Indique la acción que desea realizar. \n\nSUMAR: Sumar un nuevo producto al catálogo.\nFIN: Finalizar el proceso.").toLowerCase ;

const sumarProducto = (nuevoProducto) => {
    let nuevoNombre = prompt("Ingrese el nombre del nuevo producto");
    let nuevoPrecio = parseInt(prompt ("Ingrese el precio del nuevo producto"));

    productos.push (new Producto (nuevoNombre, nuevoPrecio));
}

while (accion != "fin") {
    sumarProducto ();

    console.log (productos);
    alert("¡El producto ha sido ingresado con éxito!");      
} 
