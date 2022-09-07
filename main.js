// declaración de productos

class Producto {
    constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [
];

productos.push (new Producto ("Remera", 1500));
productos.push (new Producto ("Pantalon", 3000));
productos.push (new Producto ("Buzo", 4000));
productos.push (new Producto ("Short", 2000));
productos.push (new Producto ("Medias", 350));

console.log (productos);

// mensaje inicial
alert("NUESTROS PRODUCTOS: \nRemera - Pantalon - Buzo - Short - Medias \n\n¡30% OFF en compras mayores a $5000!");


// definicion de limite 
let limite = parseInt(prompt("Ingresá la cantidad de productos que querés encargar"));

// funcion suma de productos
let saldo = 0;

// seleccion de prendas
for (let i = 1 ; i <= limite ; i++) {
    let prenda = prompt("Ingresá la prenda que querés: \nRemera, Pantalon, Short, Buzo, Medias").toLowerCase ();

    if (prenda==null) {
        alert("No ingresaste ninguna prenda. Por favor, intentá de nuevo.");
        i = i-1;
        continue;
    }

    switch (prenda) {
        case "remera":
        alert("Seleccionaste: " + remera.nombre + "\nPrecio: $" + remera.precio);
        saldo = saldo + remera.precio;
        break;
             
        case "pantalon":
        alert("Seleccionaste: " + pantalon.nombre + "\nPrecio: $" + pantalon.precio);
        saldo = saldo + pantalon.precio;
        break;

        case "short":
        alert("Seleccionaste: " + short.nombre + "\nPrecio: $" + short.precio);
        saldo = saldo + short.precio;
        break;

        case "buzo":
        alert("Seleccionaste: " + buzo.nombre + "\nPrecio: $" + buzo.precio);
        saldo = saldo + buzo.precio;
        break;

        case "medias":
        alert("Seleccionaste: " + medias.nombre + "\nPrecio: $" + medias.precio);
        saldo = saldo + medias.precio;
        break;
        
        default:
            alert("No ingresaste ninguna prenda. Por favor, intentá de nuevo.");
            i = i-1;
            continue;
    }
 
}

alert("El precio de tu pedido completo es: $" + saldo);

const resta = (a,b) => a - b;
const descuento = (c) => c * 0.30;

let saldoDescuento = resta(saldo, descuento(saldo)); 

if (saldo >= 5000) {
    alert("El precio de tu pedido con el descuento es de: $" + saldoDescuento);
}


/*
//Encontrar productos por su nombre

let filtroPrecio = prompt ("Ingrese el monto máximo que desee gastar");
let filtrarResult = productos.filter (item => item.precio > filtroPrecio);

alert (filtrarResult);*/