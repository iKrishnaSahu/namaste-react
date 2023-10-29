import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = (props) => {

    const [restaurant, setRestaurant] = useState();

    const { resId } = useParams();

    useEffect(() => {
        // fetch menu items
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
    }

    if (!restaurant) {
        return <h1>Loading...</h1>
    }

    const { name, cuisines } = restaurant?.cards?.[0]?.card?.card?.info;

    const { itemCards } = restaurant?.cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h4>Menu</h4>
            <ul>
                {itemCards.map(card =>
                    <li key={card.card.info.id}>{card.card.info.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;