import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RESTAURANTS from '../mocks/restaurantsMock.json';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RESTAURANTS);
        }
    });
});

it('should render the Body Component and perform search operation', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const resCardByTestIdsBeforeSearch = screen.getAllByTestId('resCard');
    expect(resCardByTestIdsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole('button', { name: 'Search' });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId('searchInput');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Rohit Wadewale' } });

    fireEvent.click(searchBtn);

    const burgerKing = screen.getByText('Rohit Wadewale');
    expect(burgerKing).toBeInTheDocument();

    const resCardByTestIds = screen.getAllByTestId('resCard');
    expect(resCardByTestIds.length).toBe(1);
});


it('should filter top rated restaurants', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const resCardByTestIdsBeforeSearch = screen.getAllByTestId('resCard');
    expect(resCardByTestIdsBeforeSearch.length).toBe(9);

    const topRatedBtn = screen.getByRole('button', { name: 'Top Rated Restaurant' });
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);

    const resCardByTestIdsAfterSearch = screen.getAllByTestId('resCard');
    expect(resCardByTestIdsAfterSearch.length).toBe(4);
});