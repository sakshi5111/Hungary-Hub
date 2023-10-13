import { MENU_ITEM_IMG_URL } from "../utils/constants";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = (items) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  items = [items];

  const itemM = items?.[0]?.item;
  return (
    <div>
      {itemM.map((item) => (
        <div key={item.card.info.id} className="flex justify-between">
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
              className="rounded-2xl"
              src={MENU_ITEM_IMG_URL + item.card.info.imageId}
              alt="menu_img"
            />
            <button
              className="w-16 text-center items-center border-2 rounded-xl mt-2 ml-14 p-1 bg-green-400 text-white hover:bg-green-500 hover:text-black"
              onClick={() => handleAddItem(item)}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
