import { render, screen } from "@testing-library/react";
import Restaurant, { withVegLabel } from "../Restaurant";
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

describe('Restaurant', () => {
    it('should render Restuarant card', () => {
        render(<Restaurant item={MOCK_DATA}/>);
        const resName = screen.getByText('Rohit Wadewale');
        expect(resName).toBeInTheDocument();
    });

    it('should render pure veg Restuarant card', () => {
        const PVR = withVegLabel(Restaurant);
        render(<PVR item={MOCK_DATA}/>);
        const resName = screen.getByText('Pure Veg');
        expect(resName).toBeInTheDocument();
    });
});