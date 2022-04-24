import React from 'react';
import carrito from '../carrito.png';;

const CarroDeCompras = () => {
  return (
    <div>
    <a class="btn-border-radius" href="#" role="button">  
    <img src={carrito} className="rounded-circle" width="50" height="50" alt=""></img>       
    </a>
    </div>
  )
}

export default CarroDeCompras