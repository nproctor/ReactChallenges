import { fireEvent, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import usePageBottom from './usePageBottom';

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetHeight'
);

describe('usePageBottom Hook', () => {

    beforeAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
          configurable: true,
          value: 400,
        });
      });
    
      afterAll(() => {
        if (originalOffsetHeight)
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
      });

    it("mock window and document size are working correctly", () => {
        window.innerHeight = 200;
        window.scrollY = 10;
        expect(window.scrollY).toBe(10);
        expect(window.innerHeight).toBe(200);
        expect(window.document.body.offsetHeight).toBe(400);
    });

    it("shall be false if window is smaller than document on load", () => {
        window.innerHeight = 200;
        window.scrollY = 0;
        const {result} = renderHook( () => usePageBottom());
        expect(result.current.isPageBottom).toBeFalsy();
    });

    it("shall be true if window is larger than document on load", () => {
        window.innerHeight = 500;
        window.scrollY = 0;
        const {result} = renderHook( () => usePageBottom());
        expect(result.current.isPageBottom).toBeTruthy();
    });

    it("shall be true if scrolled to the bottom of the page on load", () => {
        window.innerHeight = 200;
        window.scrollY = 200;
        const {result} = renderHook( () => usePageBottom());
        expect(result.current.isPageBottom).toBeTruthy();
    });

    it("shall be false is window is originally larger than document than resized smaller", () => {
        window.innerHeight = 500;
        window.scrollY = 0;
        const {result} = renderHook( () => usePageBottom());
        expect(result.current.isPageBottom).toBeTruthy();
        window.innerHeight = 200;
        fireEvent(window, new Event('resize'));
        expect(result.current.isPageBottom).toBeFalsy();
    });

    it("shall be true if page is loaded then scrolled to the bottom of the document", () => {
        window.innerHeight = 200;
        window.scrollY = 0;
        const {result} = renderHook( () => usePageBottom());
        expect(result.current.isPageBottom).toBeFalsy();
        window.scrollY = 200;
        fireEvent(window, new Event('scroll'));
        expect(result.current.isPageBottom).toBeTruthy();
    });


});