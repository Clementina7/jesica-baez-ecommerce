import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador] = useState(1)

  function sumar () {
   
    if (contador < stock) {
      setContador(contador+1)}
  }

  function restar () {
   
    if (contador > initial) {
    setContador(contador-1)}
  }

  return (
    <>
    <div className="d-flex justify-content-center">
      <button onClick={restar} type="button" className="btn btn-secondary">-</button>
      <p className="mx-4">{contador}</p>
      <button onClick={sumar} type="button" className="btn btn-secondary">+</button>
    </div>
    <div className="d-flex justify-content-center">
      <button type="button" className="btn" style={{backgroundColor:"#8ae0db"}}>Agregar al carrito</button>  
    </div>
    </>
  
    )


}

export default ItemCount