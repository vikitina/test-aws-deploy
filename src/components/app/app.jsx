import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../../pages/home/home"
import Contacts from "../../pages/contacts/contacts"
import Catalog from "../../pages/catalog/catalog"
import Goods from "../../pages/goods/goods"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route element={<Contacts />} path='/contacts'/>
          <Route element={<Catalog />} path='/catalog'/>
          <Route element={<Goods />} path='/goods/:id'/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

