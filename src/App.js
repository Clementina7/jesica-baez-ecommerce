import React from 'react';
import Formulario from './components/Formulario';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Lista from './components/Lista';
import repasador from './repasador.jpg';
import Item from './components/Item';

const App = () => {
  return (
    <>
    <NavBar/>
    <br/>
    <Item/>
    <main className="d-flex justify-content-evenly w-100">
      <ItemListContainer greeting={repasador}/>
      <ItemListContainer/>
      <ItemListContainer/>
      <ItemListContainer/>
    </main>
    <br/>
    <Lista/>
    <br/>
    <Formulario/>
    </>
    
  );
}

export default App;