import React from 'react'

const ItemList = ({productos}) => {
  return (
    <>
    {productos.length > 0 ? (
      productos.map((productos, index) => (
      <>
      <h1>{productos.title}{productos.price}</h1>
      </>
    ))
    ) : (
      <h1>Cargando...</h1>
    )}
    </>
  );
};

export default ItemList;