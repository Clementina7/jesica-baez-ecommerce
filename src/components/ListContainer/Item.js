import React from 'react';
import ItemCount from '../../components/ItemCount';
import logo from '../../assetes/logo.png';


const Item = ({
  greeting,
  title,
  btn,
}) => {

  return (
    <>
      <div className="card m-3" style={{width:"18rem"}}>
        <img src={greeting || logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h1>{title}</h1>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ItemCount stock="5" initial="1"/>
      </div>
      
    </>
  );

}

export default Item

