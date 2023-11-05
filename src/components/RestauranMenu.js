import { useParams } from "react-router-dom";
import { userRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestuarantCategory } from "./RestuarantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);
    const restaurant = userRestaurantMenu(resId);

    const dummy = "Dummy Data";

    if (!restaurant) {
        return <h1>Loading...</h1>
    }

    const { name, cuisines } = restaurant?.cards?.[0]?.card?.card?.info;

    // const { itemCards } = restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

    const categories = restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x.card?.card?.['@type']?.includes('ItemCategory'))

    const collapseOthersHandler = (index, showItem) => {
        setShowIndex(showItem ? -1 : index);
    }

    return (
        <div className="flex justify-center mt-6">
            <div className="w-8/12">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h3 className="font-bold text-xl">{cuisines.join(', ')}</h3>
                {categories.map((category, index) =>
                (
                    <RestuarantCategory key={category.card.card.title}
                        category={category.card.card}
                        showItems={index === showIndex ? true : false}
                        collapseOthers={(showItem) => collapseOthersHandler(index, showItem)} />)
                )
                }
            </div>
        </div>

    )
}

export default RestaurantMenu;