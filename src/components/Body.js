import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const online = useOnline();
    console.log(online);
    useEffect(()=>{fetchData();}, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer />;
    // }   
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
       <div className='Body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={()=> {
                        const filteredList = listOfRestaurant.filter(
                        (res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                        if(filteredList.length === 0) {
                            alert("match not found");
                            setFilteredRestaurant(listOfRestaurant);
                        }
                }
                }>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                    (res)=> res.info.avgRating>4.5
                );
                setFilteredRestaurant(filteredList);
                }
            }>Top rated restaurant</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant?.map((restaurants) => (
                        <Link to={"restaurants/"+restaurants.info.id} key={restaurants.info.id}><RestaurantCard resData={restaurants.info}/></Link>
                    ))
                }
                
            </div>
       </div> 
    );
}
export default Body;