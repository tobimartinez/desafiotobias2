function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || []
}
function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}
function actualizarBotonCarrito(){
    let productos= obtenerProductosLS();
    let contenido=`<button type="button" class="btn btn-primary position-relative">
    <img src:"images/iconobadge.png" width="24" > 
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0
    </span>
  </button>`;
    let total = 0;
    if(productos.lenght > 0){
        for(let producto of productos){
            total += producto.cantidad;
        }

        contenido=`<button type="button" class="btn btn-primary position-relative">
        <img src:"images/iconobadge.png" width="24" > 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${total}
        </span>
      </button>`;
    }
    document.getElementById("boton_carrito").innerHTML = contenido;
} 
