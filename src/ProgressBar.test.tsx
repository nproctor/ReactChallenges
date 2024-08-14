import { act } from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import userEvent from '@testing-library/user-event';

describe('ProgressBar Component', () => {
    it("shall start at 0%", () => {
        render(<ProgressBar/>);
        const percentage = screen.getByText(/%/i);
        expect(percentage.textContent).toBe("0%");
    });

    it("shall be equal to the value entered in the input", () => {
        render(<ProgressBar/>);
        const percentage = screen.getByText(/%/i);
        const input = screen.getByRole("spinbutton");
        userEvent.type(input, "20");
        expect(percentage.textContent).toBe("20%");
    });

    it("shall not exceed 100%", () => {
        render(<ProgressBar/>);
        const percentage = screen.getByText(/%/i);
        const input = screen.getByRole("spinbutton");
        userEvent.type(input, "250");
        expect(percentage.textContent).toBe("25%");
    });

    it("shall not be negative", () => {
        render(<ProgressBar/>);
        const percentage = screen.getByText(/%/i);
        const input = screen.getByRole("spinbutton");
        userEvent.type(input, "-10");
        expect(percentage.textContent).toBe("0%");
    });
});