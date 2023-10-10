import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useState } from 'react';
import Outpost from './outpost/outpost'
import Checkout from './checkout/Checkout'
import ProductDetails from './products/ProductDetails'
import Header from './header/Header'

function App() {
  const [cart, setCart] = useState([])
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/outpost' element={<Outpost cart={cart} setCart={setCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
        <Route path='/product-details/:slug' element={<ProductDetails />} />
        <Route path='/' element={<Navigate to='/outpost' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
