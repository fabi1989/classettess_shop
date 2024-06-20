function verCarrito(){
    document.getElementById('carritoVentana').showModal();
}

document.addEventListener('DOMContentLoaded', () => {
// Variables
const baseDeDatos = [
{
  id: 1,
  imagen: "img/img1.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo",
  precio: 3.50,
  },
  {
  id: 2,
  imagen: "img/img2.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 3,
  imagen: "img/img3.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 4,
  imagen: "img/img4.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 5,
  imagen: "img/img5.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 6,
  imagen: "img/img6.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 7,
  imagen: "img/img7.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 8,
  imagen: "img/img8.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 9,
  imagen: "img/img9.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 10,
  imagen: "img/img10.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 11,
  imagen: "img/img11.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 12,
  imagen: "img/img12.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 13,
  imagen: "img/img13.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 14,
  imagen: "img/img14.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 15,
  imagen: "img/img15.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 16,
  imagen: "img/img16.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 17,
  imagen: "img/img17.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 18,
  imagen: "img/img18.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 19,
  imagen: "img/img19.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 20,
  imagen: "img/img20.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 21,
  imagen: "img/img21.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 22,
  imagen: "img/img22.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 23,
  imagen: "img/img23.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 24,
  imagen: "img/img24.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 25,
  imagen: "img/img25.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 26,
  imagen: "img/img26.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 27,
  imagen: "img/img27.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 28,
  imagen: "img/img28.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 29,
  imagen: "img/img29.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 30,
  imagen: "img/img30.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 31,
  imagen: "img/img31.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 32,
  imagen: "img/img32.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 33,
  imagen: "img/img33.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 34,
  imagen: "img/img34.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 35,
  imagen: "img/img35.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 36,
  imagen: "img/img36.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 37,
  imagen: "img/img37.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 38,
  imagen: "img/img38.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 39,
  imagen: "img/img39.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 40,
  imagen: "img/img40.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 41,
  imagen: "img/img41.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 42,
  imagen: "img/img42.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 43,
  imagen: "img/img43.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 44,
  imagen: "img/img44.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 45,
  imagen: "img/img45.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 46,
  imagen: "img/img46.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 47,
  imagen: "img/img47.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 48,
  imagen: "img/img48.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 49,
  imagen: "img/img49.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  },
  {
  id: 50,
  imagen: "img/img50.jpg",
  nombre: "¡Añádelo a tu colección de moda ahora mismo!",
  precio: 3.50,
  }
];

let carrito = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // nombre
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('product__tittle');//card-title
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('product__img');//img-fluid
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('product__price');//card-text
      miNodoPrecio.textContent = `${info.precio.toFixed(2)}${divisa}`;
      // Boton
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn_agregarCarrito');//'btn', 'btn-primary' 
      miNodoBoton.textContent = 'Agregar';
      /* miNodoBoton.innerHTML = '<i class="fas fa-cart-plus"></i>'; */ 
      miNodoBoton.setAttribute('marcador', info.id); //asigna id a cada item... 
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito
  renderizarCarrito();
  // Actualizamos el LocalStorage
  guardarCarritoEnLocalStorage();
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      // div marco para imagen de producto
      const miMarco = document.createElement('div');
        miMarco.classList.add('carrito-marco');
        const miImagen = document.createElement('img');
        miImagen.src= `${miItem[0].imagen}`;
        miMarco.appendChild(miImagen);
        miNodo.appendChild(miMarco);
        const contenidoProducto = document.createTextNode(`${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio.toFixed(2)}${divisa}`);
        miNodo.appendChild(contenidoProducto);
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.style.backgroundColor = 'red';
      miBoton.style.color = 'white';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
 // Renderizamos el precio total en el HTML
 DOMtotal.textContent = calcularTotal();
 document.getElementById('contadorProductos').innerHTML= carrito.length;
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
  // Actualizamos el LocalStorage
  guardarCarritoEnLocalStorage();

}

/**
* Calcula el precio total teniendo en cuenta los productos repetidos
*/
function calcularTotal() {
  // Recorremos el array del carrito
  return carrito.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
  // Borra LocalStorage
  localStorage.clear();
}



function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();
});