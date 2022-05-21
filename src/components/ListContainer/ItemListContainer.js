import { useState, useEffect } from "react";
import React from 'react';
import ItemList from './ItemList';
import { articulos } from "../../config/Index";
import { GlobalContext } from "../../context/GlobalStateContext";

function ItemListContainer () {

  const [productos, setProductos] = useState([]); 
  
  //const {productos} = useContext(GlobalContext)

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
  }, [productos]);
  
  return (
          <div>{ <ItemList productos={productos}/> }</div>
  )
};

export default ItemListContainer