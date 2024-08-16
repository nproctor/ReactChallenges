import { act } from 'react';
import { render, renderHook, RenderHookResult, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useFetch from './useFetch';


const unMockedFetch = global.fetch;
const mockApiData = [
    '{"quote": "test"}',
    '{"quote": "words"}',
    '{"quote": "phrase"}',
    'incorrect format',
]

describe('useFetch Hook', () => {

    beforeEach(() => {
        let i = 0;
        global.fetch = jest.fn(() => Promise.resolve(new Response(mockApiData[i++])));
    });

    afterEach(() => {
        global.fetch = unMockedFetch;
    });

    it("mock fetch is working correctly", async () => {
        const quote = await fetch("ddsadsa")
        .then((res) => res.json())
        .then((json) => json.quote);
        expect(quote).toBe("test");
    })

    it("shall set data when refreshData is called", async () => {
        const {result} =  renderHook( () => useFetch());
        await waitFor( () => result.current.refreshData());
        expect(result.current.data).toBe("test");
        await waitFor( () => result.current.refreshData());
        expect(result.current.data).toBe("words"); 
        await waitFor( () => result.current.refreshData());
        expect(result.current.data).toBe("phrase"); 
    })

    it("shall set data to preset error message if theres an issue with fetching", async () => {
        const {result} =  renderHook( () => useFetch());
        await waitFor( () => result.current.refreshData());
        await waitFor( () => result.current.refreshData());
        await waitFor( () => result.current.refreshData());
        await waitFor( () => result.current.refreshData());
        expect(result.current.data).toContain("Oops... couldn't find"); 
    })    
});