const btn_producto = document.querySelectorAll('.btn_agregarCarrito');
const carrito = document.getElementById('carrito');
const imagenproducto = document.querySelectorAll('.product__img')
  
for(let i=0; i<btn_producto.length;i++){
    btn_producto[i].addEventListener('click', ()=>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        const precio=document.createElement('span');

        div.classList.add('producto');
        img.classList.add('img');
        precio.classList.add('precio');

        const imgSrc = imagenproducto[i].getAttribute('src');
        img.src = imgSrc;

        precio.textContent = '3,50 €'; 

        div.appendChild(img);
        div.appendChild(precio);
        carrito.appendChild(div); 

        agregarAlcarrito();

    });
}

/*btn_producto.addEventListener('click', ()=>{
    
 
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
});*/



function agregarAlcarrito() {
    console.log("funcion agregar funciona!!")
    
} 

