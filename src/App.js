import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import NavBar from './components/NavBar';
import Productos from './components/Productos';

const App = () => {
  return (
    <>
    <NavBar/>
    <br/>
    <Lista/>
    <br/>
    <Productos/>
    <br/>
    <Productos/>
    <br/>
    <Formulario/>
    </>
    
  );
}

export default App;