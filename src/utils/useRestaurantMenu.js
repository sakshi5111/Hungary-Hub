import { useEffect, useState } from "react";
import { MENU_API_FIRST_PART, MENU_API_SECOND_PART } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API_FIRST_PART + resId + MENU_API_SECOND_PART
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
