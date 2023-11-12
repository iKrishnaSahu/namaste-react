import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="justify-center flex m-4">
            <div className="w-8/12">
                <div className="flex justify-between">
                    Cart
                    {cartItems && cartItems.length > 0 &&
                        <button className="bg-gray-100 rounded-lg p-2" onClick={handleClearCart}>Clear</button>
                    }
                </div>

                {cartItems && cartItems.length > 0 &&
                    <ItemList items={cartItems} />
                }
                {cartItems?.length === 0 && <h1 className="font-bold text-2xl">No items in the cart</h1>}
            </div>
        </div>
    );
}