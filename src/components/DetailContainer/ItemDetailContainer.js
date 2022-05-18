import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { articulos } from '../../config'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const {id} = useParams()

  const [detalle, setDetalle] = useState(null)

  const encontrar = articulos.find((prod)=>prod.id === Number(id))

  useEffect (() => {
  
    const consulta = new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve(encontrar); 
       }, 2000);  
      
      consulta
        .then((res) => {
            setDetalle(res);
        })
        .then(() => console.log(detalle)) 
        .catch((err) => console.log(err));
  
    });

  }, []);

  return (
    <div> { <ItemDetail encontrar={encontrar}/> } </div>
  );
  
};

export default ItemDetailContainer


//   const getItem = () => {
  
//     try {
//       const res = <Item/>
//       console.log(res)
//     }
  
//     catch (error) {
//       console.log(error)
//     }
  
//   }
  
//   useEffect(() => {
     
//     getItem()
  
//     return () => {
      
//     }
//   }, [])

// }

