import React from 'react';
import ItemCount from '../../components/ItemCount';
import logo from '../../assetes/logo.png';
import { Link, NavLink } from 'react-router-dom'


const Item = ({
  img,
  title,
  texto,
  id,
}) => {

  return (
    <>
      <div className="card m-3" style={{width:"18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4>'Art. {id} = {title}'</h4>
        <p className="card-text">{texto}</p>
      </div>
      <div className="d-flex my-3">
        <NavLink to={`/itemDetail/${id}`}>
      <button type="button" className="btn" style={{backgroundColor:"pink"}}>Ver más...</button>
      </NavLink>
      </div>
      <div>
      <ItemCount stock="5" initial="1"/>
      </div>
      </div>
    </>
  );

}

export default Item

