import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
        },
        clearCart: (state, _action) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;