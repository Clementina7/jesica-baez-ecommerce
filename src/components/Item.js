import { useEffect, useState } from 'react';
import repasador from '../repasador.jpg';
import ItemList from './ItemList';

function Item() {

const [productos, setProductos] = useState([]); 

const articulos = [{
    id: 4,
    title: "Repasador",
    price: 300,
    pictureUrl: {repasador}, 
},

{
    id: 3,
    title: "Toalla",
    price: 600,
    pictureUrl: {repasador}, 
} 
]

useEffect (() => {

    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(articulos);
      }, 2000);  
    
    });

    pedido
      .then((res) => {
          setProductos(res);
      })
      .then(() => console.log(productos))
      .catch((err) => console.log(err));

    console.log(productos);

    return () => {};
},[]);

return (
        <>
        <ItemList productos={productos}/>
        </>
    );

}

export default Item