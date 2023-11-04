import { useEffect, useState } from "react"

export const useRestaurant = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const restaurants = await getLatestRestaurants();
        if (restaurants) {
            setRestaurants(restaurants);
        }
    }

    getLatestRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9380661&lng=77.7509066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        return jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? restaurants;
    }

    return restaurants;
}