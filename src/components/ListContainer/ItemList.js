import React from 'react'
import Item from './Item';

const ItemList = ({productos}) => {
  return (
    <>
    {
    productos.length > 0 ? (
      productos.map((productos) => (
      
      <Item className="d-flex" img={productos.img} title={productos.title} key={productos.id} texto={productos.texto} />     
      
    ))
    ) : (
      <div className="text-center my-5">
      <div className="spinner-grow" style={{width:"3rem", height:"3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    )}
    </>
  );
};


export default ItemList