import { act } from 'react';
import { render, screen } from '@testing-library/react';
import Countdown from './Countdown';
import userEvent from '@testing-library/user-event';

describe('Countdown Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("shall start at 10 seconds", () => {
        render(<Countdown/>);
        const time = screen.getByRole("heading", {level: 3});
        expect(time.textContent).toBe("10");
    });

    it("shall start counting down seconds after it is pressed for the first time", () => {
        render(<Countdown/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        act(() => jest.advanceTimersByTime(5000));
        const time = screen.getByRole("heading", {level: 3});
        expect(time.textContent).toBe("5");
    });

    it("shall track the number of clicks", () => {
        render(<Countdown/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
        const clicks = screen.getByRole("heading", {level: 2});
        expect(clicks.textContent).toBe("5");
    });

    it("shall stop counting down after reaching 0 seconds", () => {
        render(<Countdown/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        act(() => jest.advanceTimersByTime(10000));
        const time = screen.getByRole("heading", {level: 3});
        expect(time.textContent).toBe("0");
        act(() => jest.advanceTimersByTime(5000));
        expect(time.textContent).toBe("0");
    });

    it("shall stop counting clicks after reaching 0 seconds", () => {
        render(<Countdown/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        userEvent.click(button);
        userEvent.click(button);
        act(() => jest.advanceTimersByTime(11000));
        userEvent.click(button);
        userEvent.click(button);
        const clicks = screen.getByRole("heading", {level: 2});
        expect(clicks.textContent).toBe("3");
    });
});