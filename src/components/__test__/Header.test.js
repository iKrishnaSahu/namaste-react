import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('Header Component', () => {
    it('should render Header Component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    });

    it('should render login button inside Header Component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });


    it('should change login button to logout on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const button = screen.getByRole('button');

        fireEvent.click(button)

        expect(button.textContent).toBe('Logout');
    });
});