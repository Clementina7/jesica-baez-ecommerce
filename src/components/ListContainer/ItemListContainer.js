import { useState, useEffect } from "react";
import React from 'react';
import ItemList from './ItemList';
import Item from "./Item";
import repasador from '../../assetes/repasador.jpg'



function ItemListContainer() {

  const [productos, setProductos] = useState([]); 
  
  const articulos = [<Item greeting={repasador} title='Repasador'/>,
  <Item greeting={repasador}/>,
  <Item/>,
  <Item/>]
  // const articulos = [{
  //   id: 1,
  //   title: 'Repasador',
  //   price: 300,
  //   pictureUrl: 'https://shefasabanas.com/wp-content/uploads/2018/08/Repasador-Marquez-cuadros-1-1.jpeg',
  // },
  
  // {
  //   id: 2,
  //   title: 'Juego de toalla y toallón',
  //   price: 2100,
  //   pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/089/625/products/belly-nuevo-21-0b852b1af28b33a0a216055293559984-1024-1024.jpg',
  // }, 
  
  // {
  //   id: 3,
  //   title: 'Juego de sabanas',
  //   price: 7500,
  //   pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/858/478/products/cadiz21-0433871aeb589e22f216256188892750-1024-1024.jpg', 
  // },
  // ]
  
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
          <>
          <Item productos={productos}/>
          </>
      );
  
  }

export default ItemListContainer;