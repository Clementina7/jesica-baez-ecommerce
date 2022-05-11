import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemList from "../components/ListContainer/ItemList"
import ItemListContainer from "../components/ListContainer/ItemListContainer"
import NavBar from "../components/NavBar"
import Item from "../components/ListContainer/Item"
import Layout from "../components/Layout"

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<NavBar/>}/>
      <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
      <Route path="/ItemList" element={<ItemList/>}/>
      <Route path="/Item" element={<Item/>}/>
      </Route>
    </Routes>  
    </BrowserRouter>
    </>
  )
}

export default Rutas