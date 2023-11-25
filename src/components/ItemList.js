import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

export const ItemList = (props) => {
    const { items } = props;

    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        // dispath an action
        dispatch(addItem(item));
    }

    return (
        < div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="flex items-center w-full p-4 pb-6 border-b border-b-gray-200">
                    <div className="w-[80%]">
                        <div className="font-semibold">{item.card.info.name} </div>
                        <div>₹ {item.card.info.price / 100}</div>
                    </div>
                    {
                        item.card.info.imageId ?
                            <div className="w-[20%] h-20 relative">
                                <img className="h-full w-full" src={CDN_URL + item.card.info.imageId}></img>
                                <button className="text-green-500 rounded-lg shadow-lg px-2 py-1 absolute -bottom-4 left-4 bg-white hover:bg-gray-100"
                                    onClick={() => addItemToCart(item)}>
                                    Add +
                                </button>
                            </div> :
                            <button className="text-green-500 rounded-lg shadow-lg px-2 py-1 bg-white hover:bg-gray-100"
                                onClick={() => addItemToCart(item)}>
                                Add +
                            </button>
                    }
                </div>
            ))}
        </div>
    );
}