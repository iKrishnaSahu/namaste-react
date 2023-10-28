import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const { item } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = item?.info;

    return (
        <div className="restaurant">
            <img
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

export default Restaurant;