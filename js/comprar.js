/* const btn_Producto = document.getElementById('btn_agregarCarrito');

  

btn_Producto.addEventListener('click', ()=>{
    
    //console.log("hola")

    const div = document.createElement('div');
    const img = document.createElement('img');
    const precio=document.createElement('span');

    div.classList.add('producto');
    img.classList.add('img');
    precio.classList.add('precio');

    img.src = 'img/img1.jpg';
    precio.textContent = '3,50 €'; 

    
    div.appendChild(img);
    div.appendChild(precio);
    carrito.appendChild(div);

    
    agregarAlcarrito();
});



function agregarAlcarrito() {
    console.log("funcion agregar funciona!!")
    
} */ 

var carrito = document.getElementById("carrito");


//crear obetos de los productos
const producto1 = {
    nombre: 'Calcetines',
    precio: 3.50,
    imagen: 'img1.jpg',
    cantidad: 1,
    total: 100,
    id: 1
 };

 const producto2 = {
    nombre: 'Calcetines',
    precio: 3.50,
    imagen: 'img2.jpg',
    cantidad: 1,
    total: 110,
    id: 2
 };

 const producto3 = {
    nombre: 'Calcetines',
    precio: 3.50,
    imagen: 'img2.jpg',
    cantidad: 1,
    total: 110,
    id: 3
 };
//FIN OBJETOS DE LOS PRODUCTOS

//ARRAY QUE CONTIENE LOS PRODUCTOS
const listaProductos = [producto1, producto2, producto3];


//FOR PARA RECORRER LISTA DE PRODUCTOS
for (let i = 0; i < listaProductos.length; i++) {
    console.log(listaProductos[i].id);
    console.log(listaProductos[i].nombre);
    console.log(listaProductos[i].precio);
}

var producto = listaProductos;

    // Crea un elemento div para cada producto
    var productoDiv = document.createElement("div");
    productoDiv.className = "listaProducto";

    

    


