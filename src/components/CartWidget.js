import React from 'react';
import carrito from '../assetes/carrito.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
    <Link class="btn-border-radius" to="/CartWidget" role="button">  
    <img src={carrito} className="rounded-circle" width="50" height="50" alt=""></img>       
    </Link>
    </div>
    
  )

}

export default CartWidget