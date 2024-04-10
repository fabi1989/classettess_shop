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
        div.appendChild(addDelete());
        

        const imgsrc = imagenproducto[i].getAttribute('src');
        img.src = imgsrc;

        precio.textContent = '3,50 €'; 

        div.appendChild(img);
        div.appendChild(precio);
        carrito.appendChild(div); 


    });
}

function addDelete(){
    const btnDelete = document.createElement("button");
    btnDelete.textContent='X';
    btnDelete.classList.add('btn_delete');
  

     btnDelete.addEventListener('click', (event) =>{
        const item = event.target.parentElement;
        carrito.removeChild(item); 

});
return btnDelete;
}
 

