import React from 'react'
import Detail from './Detail'


const ItemDetail = ({encontrar}) => {
  
  return (
    <>
    {
    encontrar.length > 0 ? (
      encontrar.map((encontrar) => (
      <>
      <Detail key={encontrar.id} img={encontrar.img} title={encontrar.title} id={encontrar.id} texto={encontrar.texto} />     
      </>
    ))
    ) : (
      <div className="text-center my-15">
      <div className="spinner-grow" style={{width:"3rem", height:"3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    )}
    </>
  )
}

export default ItemDetail