import { useParams } from "react-router-dom";
import { userRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = (props) => {

    const { resId } = useParams();

    const restaurant = userRestaurantMenu(resId);

    if (!restaurant) {
        return <h1>Loading...</h1>
    }

    const { name, cuisines } = restaurant?.cards?.[0]?.card?.card?.info;

    const { itemCards } = restaurant?.cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

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