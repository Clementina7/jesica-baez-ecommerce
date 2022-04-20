import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} width="50" height="50" alt=""></img>
    </a>
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
  </div>
    </nav>

  );
}

export default App; 

/*
function App() {
  return (
    <navBar/>
  );
}

export default App;*/