import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reducer/cartSlice";

const Home = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className='container'>
      <h3 className='center mt-5 mb-4'>Our items</h3>
      <div className='row box'>
        {products.map((item) => {
          return (
            <div className='col-xxl-3 col-lg-4 col-md-6' key={item.id}>
              <div className='card'>
                <div className='card-image'>
                  <img src={item.img} alt={item.title} />
                </div>

                <div className='card-content'>
                  <span className='card-title'>{item.title}</span>
                  <p>{item.desc}</p>
                  <p>
                    <b>Price: {item.price}$</b>
                  </p>
                  <button
                    onClick={() => handleAddItem(item)}
                    className='btn btn-warning w-100 mt-3'
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
