import { useState } from "react";
import { restaurants } from "../utils/mockData";
import Restaurant from "./Restaurant";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    const filterButtonHandler = () => {
        setListOfRestaurants(listOfRestaurants.filter(x => x.info.avgRating >= 4.0))
    }

    return (
        <div className="body">
            <div className="filter-container">
                {/* <input type="text"></input> */}
                <button className="filter-btn" onClick={filterButtonHandler}>Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((res) => <Restaurant key={res.info.id} item={res} />)}
            </div>
        </div>
    )
}

export default Body;