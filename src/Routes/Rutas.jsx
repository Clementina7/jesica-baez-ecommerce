import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemList from '../components/ListContainer/ItemList'
import ItemListContainer from '../components/ListContainer/ItemListContainer'
import Item from '../components/ListContainer/Item'
import Layout from '../components/Layout'
import ItemDetailContainer from '../components/DetailContainer/ItemDetailContainer'
import ItemDetail from '../components/DetailContainer/ItemDetail'
import CartWidget from '../components/CartWidget'

const Rutas = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<ItemListContainer/>} />
       <Route path="/category/:id" element={<ItemListContainer/>} />
       <Route path="/item/:id" element={<ItemDetailContainer/>} />
       <Route path="/itemList" element={<ItemList/>} />
       <Route path="/item" element={<Item/>} />
       <Route path="/itemDetail" element={<ItemDetail/>} />
       <Route path="/cartWidget" element={<CartWidget/>} />
      
      </Route>
    </Routes>  
    </BrowserRouter>
    
  )
}

export default Rutas