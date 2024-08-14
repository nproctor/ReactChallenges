import { act } from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';
import userEvent from '@testing-library/user-event';

describe('Timer Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("Shall initially show 0 minutes and 0 seconds", () => {
        render(<Timer/>);
        const minutes = screen.getByText(/[0-9]+\smins\s[0-9]+\sseconds/);
        expect(minutes.textContent).toContain("0 mins 0 seconds");
    });

    it("Shall have buttons for start, stop, and reset", () => {
        render(<Timer/>);
        const start = screen.getByText(/start/i);
        const stop = screen.getByText(/stop/i);
        const reset = screen.getByText(/reset/i);
        expect(start).toBeInTheDocument();
        expect(stop).toBeInTheDocument();
        expect(reset).toBeInTheDocument();
    });

    it("Shall count seconds when the start button is clicked", async () => {
        render(<Timer/>);
        const start = screen.getByText(/start/i);
        const stop = screen.getByText(/stop/i);
        userEvent.click(start);
        act(() => jest.advanceTimersByTime(5000));
        userEvent.click(stop);
        const minutes = await screen.findByText(/[0-9]+\smins\s[0-9]+\sseconds/);
        expect(minutes.textContent).toContain("0 mins 5 seconds");
    });

    it("Shall increment minutes and reset seconds when seconds surpasses 59", async () => {
        render(<Timer/>);
        const start = screen.getByText(/start/i);
        const stop = screen.getByText(/stop/i);
        userEvent.click(start);
        act(() => jest.advanceTimersByTime(75000));
        userEvent.click(stop);
        const minutes = await screen.findByText(/[0-9]+\smins\s[0-9]+\sseconds/);
        expect(minutes.textContent).toContain("1 mins 15 seconds");
    });

    it("Shall reset timer when the reset button is clicked", async () => {
        render(<Timer/>);
        const start = screen.getByText(/start/i);
        const stop = screen.getByText(/stop/i);
        const reset = screen.getByText(/reset/i);
        userEvent.click(start);
        act(() => jest.advanceTimersByTime(75000));
        userEvent.click(reset);
        const minutes = await screen.findByText(/[0-9]+\smins\s[0-9]+\sseconds/);
        expect(minutes.textContent).toContain("0 mins 0 seconds");
    });

    it("Shall stop counting when the stop button is clicked", async () => {
        render(<Timer/>);
        const start = screen.getByText(/start/i);
        const stop = screen.getByText(/stop/i);
        userEvent.click(start);
        act(() => jest.advanceTimersByTime(5000));
        userEvent.click(stop);
        act(() => jest.advanceTimersByTime(5000));
        const minutes = await screen.findByText(/[0-9]+\smins\s[0-9]+\sseconds/);
        expect(minutes.textContent).toContain("0 mins 5 seconds");
    });
});
