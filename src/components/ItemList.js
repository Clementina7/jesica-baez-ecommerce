import React from 'react'

const ItemList = ({productos}) => {
  return (
    <>
    {
    productos.length > 0 ? (
      productos.map((productos) => (
      <>
      <h2>{productos.id}{productos.title}{productos.price}</h2>
      </>
    ))
    ) : (
      <h1>Cargando...</h1>
    )}
    </>
  );
};

export default ItemList;