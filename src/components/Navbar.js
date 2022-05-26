import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../reducer/cartSlice";
import { useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <nav className='nav-wrapper'>
      <div className='container'>
        <Link to='/shopping-cart/' className='logo'>
          Shopping
        </Link>

        <ul className='right'>
          <li>
            <Link to='/shopping-cart/'>Home</Link>
          </li>
          <li>
            <Link to='/shopping-cart/cart'>
              <MdShoppingCart/>(
              {cartTotalQuantity})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
