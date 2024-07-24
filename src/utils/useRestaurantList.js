import {useEffect, useState} from "react";
import { RESTAURANT_LIST } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurantJson, setlistOfRestaurantJson] = useState(null);
    useEffect(()=>
        {
            fetchData();
        }, []);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setlistOfRestaurantJson(json);
    };
    return listOfRestaurantJson;
}
export default useRestaurantList;