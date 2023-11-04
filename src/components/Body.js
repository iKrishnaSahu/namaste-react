import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurant } from "../utils/useRestaurant";

const Body = () => {
    const listOfRestaurants = useRestaurant();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setFilteredRestaurant(listOfRestaurants);
    }, [listOfRestaurants])

    const filterButtonHandler = () => {
        setFilteredRestaurant(listOfRestaurants.filter(x => x.info.avgRating >= 4.0));
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you are offline</h1>;
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
                    {filteredRestaurant.map((res) =>
                        <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                            <Restaurant item={res} />
                        </Link>
                    )}
                </div>
            </div>
        )
}

export default Body;