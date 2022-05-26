import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/shopping-cart/' element={<Home />} />
        <Route path='/shopping-cart/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
