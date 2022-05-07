import React from 'react';
import Formulario from './components/Formulario';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import Lista from './components/Lista';
import repasador from './assetes/repasador.jpg';
import Item from './components/ListContainer/Item';
import ItemList from './components/ListContainer/ItemList';

const App = () => {
  return (
    <>
    <NavBar/>
    <br/>
    <ItemListContainer>
    <ItemList className="d-flex justify-content-evenly w-100">
      <Item greeting={repasador}/>
      <Item greeting={repasador}/>
      <Item/>
      <Item/>
    </ItemList>
    </ItemListContainer>
    <br/>
    <Lista/>
    <br/>
    <Formulario/>
    </>
    
  );
}

export default App;