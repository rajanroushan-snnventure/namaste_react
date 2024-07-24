import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwoString} = resData;
    return (
        <div className='res-card'>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{avgRating} stars</h5>
            <h6>{costForTwoString}</h6>
        </div>
    );
}
export default RestaurantCard;