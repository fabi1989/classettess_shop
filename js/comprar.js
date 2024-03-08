const btn_Producto = document.getElementById('btn_agregarCarrito');


btn_Producto.addEventListener('click', ()=>{
    //console.log()   
    agregarAlcarrito();
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

    
    //agregarAlcarrito();
});



function agregarAlcarrito() {
    console.log("funcion agregar funciona!!")
    
}


