import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/product" element={<Product />}/>
    <Route path="/productlist" element={<ProductList />}/>
    
  </Routes>
</BrowserRouter>;
}

export default App;
