import React from 'react';
import Formulario from './components/Formulario';
import NavBar from './components/NavBar';
import Productos from './components/Productos';

const App = () => {
  return (
    <>
    <NavBar/>
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