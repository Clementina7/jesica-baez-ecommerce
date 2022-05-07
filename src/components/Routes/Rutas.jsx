import React from 'react'
import ItemListContainer from '../ListContainer/ItemListContainer'

const Rutas = () => {
  return (
    <>
    <BrowserRouter/>
    <Routes>
      <Route index element={<ItemListContainer/>}/>
    </Routes>  
    </>
  )
}

export default Rutas