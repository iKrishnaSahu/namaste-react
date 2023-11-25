import { render, screen } from "@testing-library/react"
import { ContactUs } from "../ContactUs"
import '@testing-library/jest-dom';

describe('ContactUs component', () => {
    it('Should load contact us conmponent', () => {
        render(<ContactUs />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })

    it('Should check if button is there on the document', () => {
        render(<ContactUs />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    })

    it('Should laoad input name inside the ContactUs component', () => {
        render(<ContactUs />);
        const inputNmae = screen.getByPlaceholderText('Name');
        expect(inputNmae).toBeInTheDocument();
    })

    it('Should load 2 input boxes inside the ContactUs component', () => {
        render(<ContactUs />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toEqual(2);
    })
});

