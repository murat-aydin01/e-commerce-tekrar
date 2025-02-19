import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
