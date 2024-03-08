import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./componants/product/product";
import Home from "./pages/home";
import Shop from "./pages/shop/shop";
import Productpage from "./pages/productpage/Productpage";
import AddCart from "./pages/cart/Addcart";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="cart" element={<AddCart/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="productpage" element={<Productpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
