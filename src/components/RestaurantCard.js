import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="m-4 p-4 w-[300px] shadow-md hover:shadow-xl ml-14">
      <img
        className="my-2 rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5 className="font-medium text-gray-400">{areaName}</h5>
      <span className="flex justify-between mt-1 font-semibold">
        <h4 className="bg-green-500 text-white p-1 rounded-md">
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

export const withPromotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 ml-14 mt-6 p-2 bg-black text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
