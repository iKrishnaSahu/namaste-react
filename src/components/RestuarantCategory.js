import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestuarantCategory = (props) => {

    const { title, itemCards } = props.category;

    const handleClick = () => {
        props.collapseOthers(props.showItems);
    }

    return (
        <div>
            {itemCards?.length &&
                <div className="w-full my-2 shadow-lg">
                    <div className="flex justify-between cursor-pointer hover:bg-gray-100 p-4"
                        onClick={handleClick}>
                        <span className="font-bold">{title} ({itemCards.length})</span>
                        <span>⬇️</span>
                    </div>
                    {props.showItems
                        ?
                        (<div className="px-4">
                            <ItemList items={itemCards} />
                        </div>)
                        : null
                    }
                </div>
            }
        </div>
    );
}