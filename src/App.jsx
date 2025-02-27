import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
