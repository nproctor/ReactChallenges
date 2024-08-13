import { act } from 'react';
import { render, screen } from '@testing-library/react';
import ShowHideTitle from './ShowHideTitle';
import userEvent from '@testing-library/user-event';

describe('ShowHideTitle Component', () => {
    it("Shall be in the document", () => {
        render(<ShowHideTitle/>);
        const title = screen.queryByText("Title");
        expect(title).toBeInTheDocument();
    });

    it("Shall initially show the title", () => {
        render(<ShowHideTitle/>);
        const title = screen.queryByText("Title");
        expect(title).toBeVisible();
    });

    it("Shall hide title after an odd number of clicks", () => {
        render(<ShowHideTitle/>);
        const button = screen.getByRole("button");
        act( () => {
            userEvent.click(button);
            userEvent.click(button);
            userEvent.click(button);
        });
        const title = screen.queryByText("Title");
        expect(title).not.toBeVisible();
    });

    it("Shall show the title after an even number of clicks", () => {
        render(<ShowHideTitle/>);
        const button = screen.getByRole("button");
        act( () => {
            userEvent.click(button);
            userEvent.click(button);
            userEvent.click(button);
            userEvent.click(button);
        });
        const title = screen.queryByText("Title");
        expect(title).toBeVisible();
    });
});
