const btn_producto = document.querySelectorAll('.btn_agregarCarrito');
const carrito = document.getElementById('carrito');
const imagenproducto = document.querySelectorAll('.product__img')
const tabla = document.querySelector('.tabla');
  
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
        //muestro producto sin tabla
        /* div.appendChild(img);
        div.appendChild(precio);
        carrito.appendChild(div);
 */

        //muestro producto con tabla(pero no funcional)
        tabla.innerHTML += `
        <tr>
            <th></th>        
            <th>Precio</th>
            <th></th>
            <th>Quitar</th>
        </tr>

        <tr>
            <td>${imagenproducto[i].getAttribute('alt')}</td>
            <td>3,50 €</td>
            <td><img src="${imagenproducto[i].getAttribute('src')}" alt="${imagenproducto[i].getAttribute('alt')}"></td>
            <td><button class="btn_delete">X</button></td>
        </tr>
        `;

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
 

