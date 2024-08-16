import { fireEvent, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useWindowDimensions from './useWindowDimensions';


describe('useWindowDimensions Hook', () => {
    it("mock window size is working correctly", () => {
        window.innerHeight = 200;
        window.innerWidth = 200;
        expect(window.innerWidth).toBe(200);
        expect(window.innerHeight).toBe(200);
    });

    it("shall contain the width and height of the window on load", () => {
        window.innerHeight = 200;
        window.innerWidth = 200;
        const {result} = renderHook( () => useWindowDimensions());
        expect(result.current.width).toBe(200);
        expect(result.current.height).toBe(200);
    });


    it("shall update value of width on resize event", () => {
        window.innerHeight = 200;
        window.innerWidth = 200;
        const {result} = renderHook( () => useWindowDimensions());
        window.innerWidth = 300;
        fireEvent(window, new Event('resize'));
        expect(result.current.width).toBe(300);
        expect(result.current.height).toBe(200);
    });

    it("shall update value of height on resize event", () => {
        window.innerHeight = 200;
        window.innerWidth = 200;
        const {result} = renderHook( () => useWindowDimensions());
        window.innerHeight = 300;
        fireEvent(window, new Event('resize'));
        expect(result.current.width).toBe(200);
        expect(result.current.height).toBe(300);
    });

    it("shall update value of height on resize event", () => {
        window.innerHeight = 200;
        window.innerWidth = 200;
        const {result} = renderHook( () => useWindowDimensions());
        window.innerHeight = 300;
        window.innerWidth = 400;
        fireEvent(window, new Event('resize'));
        expect(result.current.width).toBe(400);
        expect(result.current.height).toBe(300);
    });

});