import { createSlice } from '@reduxjs/toolkit'
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'

export const productsSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
        {id:1,title:'Nike', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Bambi', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'Hammer Jack', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Mango', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'The North Face', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addItem: (state,action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if(itemIndex >=0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else{
        state.cartItems.push({ ...action.payload, cartQuantity: 1})
      }
      
    },
    removeItem: (state,action) => {
      const deleteItem = state.cartItems.filter(item => item.id !== action.payload.id)
      state.cartItems = deleteItem;
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if(state.cartItems[itemIndex].cartQuantity >1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if(state.cartItems[itemIndex].cartQuantity === 1){
        const removeItem = state.cartItems.filter(item => item.id !== action.payload.id)
        state.cartItems = removeItem;
      }
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    getTotal: (state) => {
      const {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal
        },
        {
          total: 0,
          quantity: 0
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
})

export const { addItem, removeItem, decreaseItem, clearCart, getTotal } = productsSlice.actions

export default productsSlice.reducer