import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_IMG_URL } from "../utils/constants";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import { clearCart, removeItem } from "../utils/cartSlice";
import { EMPTY_CART_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="p-5 w-6/12 m-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl text-center mb-5 ">Cart Items</h1>
        <button
          className="bg-green-400 p-2 m-2 rounded-lg text-white hover:text-black"
          onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div>
          <img src={EMPTY_CART_URL} alt="empty-cart" />
          <h1 className="text-center font-bold text-3xl">Cart is empty</h1>
          <p className="mt-2 text-gray-400 text-center">
            Looks like you have not added anything to your cart. Go ahead <br />{" "}
            & explore the restaurants.
          </p>
        </div>
      )}
      <div className="">
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between border-b-2 border-dashed border-gray-300 pb-3">
            <div className="my-8">
              <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
              <h4>{"₹" + item.card.info.price / 100}</h4>
              <div className="flex my-0.5">
                {/*ternary operator - veg and nonveg*/}
                <p className="mt-0.5 mr-0.5">
                  {item.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                    <FaRegCaretSquareUp
                      className="nonveg"
                      size="1.25rem"
                      style={{ color: "red" }}
                    />
                  ) : (
                    <FaRegStopCircle
                      className="veg"
                      size="1.25rem"
                      style={{ color: "green" }}
                    />
                  )}
                </p>
                <p>{item.card.info.itemAttribute.vegClassifier}</p>
              </div>
              <p className="w-[600px] text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-44 mt-8">
              <img
                className="rounded-2xl h-28"
                src={MENU_ITEM_IMG_URL + item.card.info.imageId}
                alt="menu_img"
              />
              <button
                className="w-20 text-center items-center border-2 rounded-xl mt-2 ml-6 p-1 bg-red-500 text-white hover:text-black"
                onClick={handleRemoveItem}>
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
