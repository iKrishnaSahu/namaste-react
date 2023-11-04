import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export const userRestaurantMenu = (resId) => {

    const [resInfo, setRefInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setRefInfo(json.data);
    }

    return resInfo;
}