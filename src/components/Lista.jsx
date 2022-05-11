import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Lista = () => {

const obtenerPokemon = async()=> {

  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/comfey")
    console.log(res)
  }

  catch (error) {
    console.log(error)
  }

}

useEffect(() => {
   
  obtenerPokemon()

  return () => {
    
  }
}, [])


  return (
    <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action" aria-current="true">
    Todos los productos
  </a>
  <a href="#" className="list-group-item list-group-item-action">Dormitorio</a>
  <a href="#" className="list-group-item list-group-item-action">Bebé</a>
  <a href="#" className="list-group-item list-group-item-action">Decoración</a>
    </div>
  )
}

export default Lista