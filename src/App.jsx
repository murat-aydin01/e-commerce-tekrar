import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
