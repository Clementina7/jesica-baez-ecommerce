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
       <Route path="/ItemList" element={<ItemList/>} />
       <Route path="/Item" element={<Item/>} />
       <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>} />
       <Route path="/ItemDetail" element={<ItemDetail/>} />
       <Route path="/CartWidget" element={<CartWidget/>} />
       
      </Route>
    </Routes>  
    </BrowserRouter>
    
  )
}

export default Rutas