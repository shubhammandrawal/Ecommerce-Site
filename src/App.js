import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContext from './context/Context';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Category from './components/category/Category';
import Product from './components/product/Product';
import SingleProduct from './components/Single-Product/SingleProduct';

function App() {
  return <>
    <BrowserRouter>
      <AppContext>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/category/:id' element={<Category />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route> 
        </Routes>
      </AppContext>
    </BrowserRouter>
  </>
}

export default App;
