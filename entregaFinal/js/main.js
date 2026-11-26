/* primero hacemos el la funcion de productos.
 asi la enseño el profe */

/* function Productos (id, nombre, stock, precio) {
    this.id = id,
    this.nombre = nombre,
    this.stock = stock,
    this.precio = precio
};
 */
/* asi lo pide el ticher */
class Producto {
    constructor (id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio
}   
/* creamos esta funsion para que se actualice el stock */
    vender (cantidad){
        if (cantidad <= this.stock){
            this.stock = this.stock - cantidad;
            console.log ("venta realizada con exito. Nuevo stock de " + this.nombre + ":" + this.stock)
        } else {
            console.log ("No hay suficiente stock")

        }
    }
};
/* creamos los productos usando la funsion pre establecida para que no alla errores  */

const producto1 = new Producto ( 1 , "Medias", 30 , 3500 );
const producto2 = new Producto ( 2 , "Bikinis", 5 , 15000 );
const producto3 = new Producto ( 3 , "Pijama" , 3 , 10000 );
const producto4 = new Producto ( 4 , "Ropa interior", 2 , 5000 );

/* agrupamos los productos en un catalogo (array) */
const catalogo = [producto1, producto2 , producto3, producto4];

/* probamos la venta del producto */

producto1.vender(5);
producto2.vender(6);

/* vemos la actualizacion del catalogo */
console.log ("catalogo actualizado:" , catalogo)

/* ordenn superior */

function buscarProductoPorNombre (nombreBuscado){
    const encontrado = catalogo.find(
        (p) => p.nombre.toLowerCase() === nombreBuscado.toLowerCase ()
    );
    if (encontrado) {
        console.log ("Producto encontrado:", encontrado);
        alert ("encontrado" + encontrado.nombre + "- precio : $ " + encontrado.precio + "- stock:" + encontrado.stock);
    }else {
        console.log ("no se encontro el producto buscado");
        alert("no se encontro ningun producto con ese nombre ");
    }
}

/* 2. filter: Filtrar productos con stock disponible (stock > 0) */
function filtrarProductosConStock() {
  const disponibles = catalogo.filter((p) => p.stock > 0);
  console.log("Productos disponibles con stock: ", disponibles);
  return disponibles;
}


function calcularValorTotalInventario() {
  const total = catalogo.reduce((acumulador, p) => acumulador + p.precio * p.stock, 0);
  console.log("Valor total del inventario: $" + total);
  alert("El valor total de todo el stock es: $" + total);
  return total;
}

// Prueba 1: Búsqueda puntual

buscarProductoPorNombre("Pijama");

// Prueba 2: Filtrado por disponibilidad

filtrarProductosConStock();

// Prueba 3: Cálculo total acumulado

calcularValorTotalInventario();
 
