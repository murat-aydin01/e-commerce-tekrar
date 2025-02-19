import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Products from "./pages/Products";

function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/products" element={<Products/>} />
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
