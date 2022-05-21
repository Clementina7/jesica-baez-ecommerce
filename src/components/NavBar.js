import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assetes/logo.png';
import CartWidget from './CartWidget';


function NavBar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#e2be99"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} className="rounded-circle" width="60" height="60" alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/itemListContainer">Productos</NavLink>
            <NavLink className="nav-link" to="/">Contacto</NavLink>
          </div>
        </div>
        <CartWidget/>
      </div>
    </nav>

  );
}

export default NavBar; 