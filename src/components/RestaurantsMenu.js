import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantsMenu = () => {
    const {resId} = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    if(restaurantInfo === null) return <Shimmer/>;
    const {name, costForTwoMessage, cuisines} = restaurantInfo?.data?.cards[2]?.card?.card?.info;
    const menuItems = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ") + "  - " + costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {menuItems.map(item=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" "}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    );
};
export default RestaurantsMenu;