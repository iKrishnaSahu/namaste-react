import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    const filterButtonHandler = () => {
        setFilteredRestaurant(listOfRestaurants.filter(x => x.info.avgRating >= 4.0));
    }

    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const restaurants = await getLatestRestaurants();
        if (restaurants) {
            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        }
    }

    getLatestRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9380661&lng=77.7509066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        return jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
    }

    searchRestaurant = async () => {
        if (searchText.length > 0) {
            setFilteredRestaurant(
                listOfRestaurants.filter(x => (x.info.name.toLowerCase()).includes(searchText.toLowerCase())));
        } else {
            setFilteredRestaurant(listOfRestaurants);
        }
    }

    return filteredRestaurant.length === 0
        ? <h1>Loading...</h1>
        // return <Shimmer />;
        : (
            <div className="body">
                <div className="filter-container">
                    <div>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}></input>
                        <button className="search-btn" onClick={searchRestaurant}>Search</button>
                    </div>
                    <button className="filter-btn" onClick={filterButtonHandler}>Top Rated Restaurant</button>
                </div>
                <div className="restaurant-container">
                    {filteredRestaurant.map((res) => <Restaurant key={res.info.id} item={res} />)}
                </div>
            </div>
        )
}

export default Body;