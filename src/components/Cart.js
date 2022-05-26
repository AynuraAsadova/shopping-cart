import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItem,
  clearCart,
  getTotal,
} from "../reducer/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className='container cart'>
      <h3 className='text-center mt-5 mb-5'>Shopping cart</h3>
      {cart.cartItems.length === 0 ? (
        <div className='empty-cart text-center'>
          <div>Your cart is empty</div>
          <Link to='/shopping-cart/'>
            <BsArrowLeft /> Start shopping
          </Link>
        </div>
      ) : (
        <>
          <div className='titles d-none d-md-grid'>
            <h4 className='product-title'>Product</h4>
            <h4 className='price'>Price</h4>
            <h4 className='quantity'>Quantity</h4>
            <h4 className='total'>Total</h4>
          </div>
          <div className='product-item'>
            {cart.cartItems?.map((cartItem) => (
              <div className='cart-item' key={cartItem.id}>
                <div className='cart-product'>
                  <img src={cartItem.img} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.desc}</p>
                    <button onClick={() => dispatch(removeItem(cartItem))}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className='cart-product-price'>
                  <div>
                    <h4 className='price d-inline-block d-md-none me-2'>Price:</h4>
                    {cartItem.price}$
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <h4 className='quantity d-inline-block d-md-none me-3'>
                    Quantity:
                  </h4>
                  <div className='cart-product-quantity'>
                    <button onClick={() => dispatch(decreaseItem(cartItem))}>
                      -
                    </button>
                    <div className='count'>{cartItem.cartQuantity}</div>
                    <button onClick={() => dispatch(addItem(cartItem))}>
                      +
                    </button>
                  </div>
                </div>
                <div className='cart-product-total-price'>
                  <h4 className='total d-inline-block d-md-none me-2'>Total: </h4>
                  {cartItem.price * cartItem.cartQuantity}$
                </div>
              </div>
            ))}
          </div>
          <div className='cart-summary'>
            <button
              className='clear-cart'
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
            <div className='cart-checkout'>
              <div className='subtotal'>
                <span>Subtotal</span>
                <span className='amount'>{cart.cartTotalAmount}$</span>
              </div>
              <div>
                <Link to='/shopping-cart/' className='d-block'>
                  <BsArrowLeft /> Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
