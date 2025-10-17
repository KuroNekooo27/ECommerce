import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductsPage';
import CartPage from './screens/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/products' element={<ProductPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
