import { useState, useEffect } from "react";
import React from 'react';
import ItemList from './ItemList';
import repasador from '../../assetes/repasador.jpg';
import logo from '../../assetes/logo.png';
import Item from "./Item";


function ItemListContainer () {

  const [productos, setProductos] = useState([]); 
  
  const articulos = [{id: 1, img:{repasador}, title:"Repasador"},
  {id: 2, img:{logo} },
  {id:3, texto:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {id:4}]
 
  useEffect (() => {
  
      const consulta = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(articulos); 
        }, 2000);  
      
      });
      consulta
        .then((res) => {
            setProductos(res);
        })
        .then(() => console.log(productos)) 
        .catch((err) => console.log(err));
  
      console.log(productos); 
  
      return () => {
  
      }
  }, [])
  
  return (
          <div>{ <ItemList productos={productos}/> } </div>
      );
  
  }

export default ItemListContainer