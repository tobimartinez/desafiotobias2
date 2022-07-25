function renderProductosCarrito(){
    let productos= obtenerProductosCarrito();
    let contenido=`<table class="table">`;
    for (let producto of productos) { 
        contenido += `<tr>
        <td><img src=img/${producto.imagen}" class="" alt="${producto.nombre} width="32"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td> <a href=# class="btn-danger card-text text-center"><img src=# width="24"> </a></td>
        </tr>`;
    }
    contenido +=`</table>`
    document.getElementById("productos_carrito").innerHTML = contenido;
}
obtenerProductosCarrito();
renderProductosCarrito();