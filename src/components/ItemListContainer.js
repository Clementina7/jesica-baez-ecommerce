import React from 'react';
import logo from '../logo.png';


const ItemListContainer = ({
  greeting,
  boton,
  imagen,
}) => {

  return (
    
      <div className="card m-3" style={{width:"18rem"}}>
        <img src={greeting || logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
     
  );

}

export default ItemListContainer;