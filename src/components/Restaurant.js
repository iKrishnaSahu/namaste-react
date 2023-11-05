import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const { item } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = item?.info;

    return (
        <div className="m-4 p-4 w-[300px] hover:scale-95 hover:transition-all">
            <img
                className="rounded-lg w-[100%] h-[250px]"
                src={CDN_URL + cloudinaryImageId}>
            </img>
            <h3 className='name'>{name}</h3>
            <h4 className='cuisines'>{cuisines.join(',  ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} ETA</h4>
        </div>
    )
}

// Higher order components

export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute bg-black text-white p-1 rounded-lg top-6 left-3 z-10 pointer-events-none">Pure Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default Restaurant;