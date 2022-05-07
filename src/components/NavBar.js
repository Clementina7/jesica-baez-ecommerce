import React from 'react';
import logo from '../../src/assetes/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#e2be99"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="rounded-circle" width="60" height="60" alt=""></img>
        </a>
        <p className="navbar-nav text-dark">"ARMENIA - blanco (&) deco"</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Productos</a>
            <a className="nav-link" href="#">Contacto</a>
          </div>
        </div>
        <CartWidget/>
      </div>
    </nav>

  );
}

export default NavBar; 