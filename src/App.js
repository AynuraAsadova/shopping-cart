import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/shopping-cart/' element={<Home />} />
        <Route path='/shopping-cart/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
