import React from 'react'
import Item from './Item';

const ItemList = ({productos}) => {
  return (
    <>
    {
    productos.length > 0 ? (
      productos.map((productos) => (
      <>
      <Item>{productos.id}{productos.title}{productos.pictureUrl}</Item>
      </>
    ))
    ) : (
      <h1>Cargando...</h1>
    )}
    </>
  );
};


export default ItemList;