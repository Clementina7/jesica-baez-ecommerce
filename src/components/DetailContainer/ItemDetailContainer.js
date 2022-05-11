import React from 'react'
import Item from '../ListContainer/Item'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {

  const getItem = () => {
  
    try {
      const res = <Item/>
      console.log(res)
    }
  
    catch (error) {
      console.log(error)
    }
  
  }
  
  useEffect(() => {
     
    getItem()
  
    return () => {
      
    }
  }, [])

}

export default ItemDetailContainer