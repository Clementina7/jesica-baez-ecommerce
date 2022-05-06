import React from 'react'

const ItemList = ({productos}) => {
  return (
    <>
    {
    productos.length > 0 ? (
      productos.map((productos) => (
      <>
      <div>{productos.id}{productos.title}{productos.pictureUrl}</div>
      </>
    ))
    ) : (
      <h1>Cargando...</h1>
    )}
    </>
  );
};

export default ItemList;