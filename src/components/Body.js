import { useState, useEffect, useContext } from "react";
import Restaurant, { withVegLabel } from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurant } from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {
    const listOfRestaurants = useRestaurant();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    const VegRestaurant = withVegLabel(Restaurant);

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

    const { loggedInUser, setUserName } = useContext(UserContext);

    return filteredRestaurant.length === 0
        ? <h1>Loading...</h1>
        // return <Shimmer />;
        : (
            <div className="body">
                <div className="filter-container m-4 p-4">
                    <input
                        className="border border-solid border-black"
                        type="text"
                        data-testid="searchInput"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}></input>
                    <button className="search-btn rounded-lg m-2 px-4 py-1 bg-green-100 shadow hover:bg-green-200"
                        onClick={searchRestaurant}>
                        Search
                    </button>
                    <button className="filter-btn rounded-lg m-2 px-4 py-1 bg-gray-100 hover:bg-gray-200"
                        onClick={filterButtonHandler}>
                        Top Rated Restaurant
                    </button>
                    <div className="inline m-2 px-4 py-1">
                        <label>UserName - </label>
                        <input
                            className="border border-solid border-black p-1"
                            type="text"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {filteredRestaurant.map((res) =>
                        <Link to={"/restaurant/" + res.info.id} key={res.info.id} data-testid="resCard">
                            {res.info.veg ?
                                (<VegRestaurant item={res}  />) :
                                (<Restaurant item={res} />)}
                        </Link>
                    )}
                </div>
            </div>
        )
}

export default Body;