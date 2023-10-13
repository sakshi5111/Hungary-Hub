import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // console.log(resInfo);

  if (resInfo === null) {
    return <MenuShimmer />;
  } else {
    const {
      name,
      cuisines,
      costForTwoMessage,
      avgRating,
      totalRatingsString,
      sla,
    } = resInfo?.cards[0]?.card?.card?.info;

    const categories =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ||
      resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    return (
      <div className="m-20">
        <div className="flex justify-between">
          <div>
            <p className="mb-3 text-4xl font-bold drop-shadow-lg">{name}</p>
            <p className="text-lg text-gray-400 mb-3">{cuisines.join(", ")}</p>
          </div>
          <div className="border p-3 text-center rounded-2xl">
            <p className="border-b-2 text-lg pb-1">
              <i className="fa-solid fa-star"></i>
              {avgRating}
            </p>
            <p className="pt-2 text-gray-400">{totalRatingsString}</p>
          </div>
        </div>

        <div className="border-dashed border-y-2 my-6 py-8 flex justify-between text-lg">
          <div className="pl-40 flex">
            <i className="fa-solid fa-clock mt-1.5 pr-1"></i>
            <p>{sla.deliveryTime + " MINS"}</p>
          </div>
          <p className="pr-40">{costForTwoMessage}</p>
        </div>
        {/* categories accordian */}
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.id}
            dataa={category?.card?.card}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenu;
