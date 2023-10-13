import ItemMenu from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ dataa }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };
  const data = [dataa];
  console.log(Array.isArray(data));

  return (
    <div className=" bg-gray-100 shadow-lg p-4 mx-auto my-5">
      <div
        className="flex justify-between font-bold text-xl cursor-pointer"
        onClick={handleClick}>
        <span>
          {dataa.title} ({dataa.itemCards.length})
        </span>
        <span>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
      <div>{showItem && <ItemMenu item={dataa.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
