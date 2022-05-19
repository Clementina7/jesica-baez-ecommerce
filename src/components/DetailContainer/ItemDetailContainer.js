import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { articulos } from '../../config/Index'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [productos, setProductos] = useState([])

  const encontrar = articulos.find((art)=>art.id === Number(id))

  useEffect (() => {
  
    const consulta = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(encontrar)
        }, 1000)
      })
    consulta
      .then((res) => {
        setProductos(res)
      })
      .then(() => console.log(productos)) 
      .catch((err) => console.log(err))
  
    return () => { }
    
  }, [])

  return (
    <div>
      {productos ? <ItemDetail productos={productos} /> : <h1>Cargando....</h1>}
    </div>
  )
  
}

export default ItemDetailContainer


  
// const getItem = () => {
  
//      try {
//        const res = <Item/>
//        console.log(res)
//      }
  
//      catch (error) {
//        console.log(error)
//      }
  
//    }
  
//   useEffect(() => {
     
//     getItem()
  
//     return () => {
      
//      }
//    }, [])

//    return (
//          <div> { <ItemDetail encontrar={encontrar}/> } </div>
//        )
      
  

// export default ItemDetailContainer