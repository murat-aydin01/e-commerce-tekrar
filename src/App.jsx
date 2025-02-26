import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="grid grid-rows-[100px_1fr_100px] grid-cols-[1fr_4fr] min-h-screen ">
          <div className="col-span-2">
            <NavBar />
          </div>
          <div>
            <SideBar/>
          </div>
          <div className="p-4 border">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </div>
          <div className="col-span-2 ">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
