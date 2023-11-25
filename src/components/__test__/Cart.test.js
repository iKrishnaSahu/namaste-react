import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from '../mocks/resMenu.json';
import RestaurantMenu from "../RestauranMenu";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it('should load restartant menu component', async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
                <RestaurantMenu />
                <Cart />
            </BrowserRouter>
        </Provider>
    ));

    const resName = screen.getByText('Hotel Vandu International');
    expect(resName).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(21);

    expect(screen.getByText('Cart - 0')).toBeInTheDocument();

    const addBtns = screen.getAllByRole('button', { name: 'Add +' });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText('Cart - 1')).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText('Cart - 2')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(23);

    const clearCart = screen.getByRole('button', { name: 'Clear' });
    fireEvent.click(clearCart);

    expect(screen.getByText('Cart - 0')).toBeInTheDocument();
    expect(screen.getAllByTestId('foodItems').length).toBe(21);
});