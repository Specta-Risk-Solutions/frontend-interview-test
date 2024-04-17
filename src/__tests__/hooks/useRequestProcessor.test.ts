import { act, renderHook } from '@testing-library/react';

import { BASE_URL, API_KEY } from "../../constants/url-details";
import useRequestProcessor from "../../hooks/useRequestProcessor";

describe('useRequestProcessor hook', () => {
    afterEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    it('fetches data from API when URL is provided',async () => {
        const mockResponse = {
            status: "OK",
            results: [],
        };
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const { result } = renderHook(() => useRequestProcessor(`${BASE_URL}/svc/topstories/v2/science.json?api-key=${API_KEY}`));

        expect(result.current.loading).toBe(true);

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(result.current.data).toEqual(mockResponse);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe('');
    });
    
    it('handles error when fetching data from API fails', async () => {
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: false,
            json: () => Promise.reject(new Error('Failed to fetch data')),
        });

        const { result } = renderHook(() => useRequestProcessor(`${BASE_URL}/svc/topstories/v2/science.json?api-key=${API_KEY}`));

        expect(result.current.loading).toBe(true);

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(result.current.data).toBeUndefined();
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe('Failed to fetch data');
    });

    it('fetches data from localStorage when URL is not provided', async () => {
        const mockData = [{name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"}];
        localStorage.setItem('books', JSON.stringify(mockData));

        const { result } = renderHook(() => useRequestProcessor(undefined, 'books'));

        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(mockData);
    });

    it('creates data via API when URL is provided', async () => {
        const mockNewData = {name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"};
        const mockResponse = { success: true };
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const { result } = renderHook(() => useRequestProcessor(`${BASE_URL}/svc/topstories/v2/science.json?api-key=${API_KEY}`));

        act(() => {
            result.current.createData(mockNewData);
        });

        expect(result.current.loading).toBe(true);

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe('');
        expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    it('creates data via localStorage when URL is not provided', async () => {
        const mockNewData = {name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"};
        const mockLocalStorageData = [{name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"}];
        localStorage.setItem('books', JSON.stringify(mockLocalStorageData));

        const { result } = renderHook(() => useRequestProcessor(undefined, 'books'));

        act(() => {
            result.current.createData(mockNewData);
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe('');
        expect(JSON.parse(localStorage.getItem('books') || '')).toEqual([...mockLocalStorageData, mockNewData] || '');
    });

    it('handles error when creating data via API fails', async () => {
        const mockNewData = {name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"};
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: false,
            json: () => Promise.reject(new Error('Failed to create data')),
        });

        const { result } = renderHook(() => useRequestProcessor(`${BASE_URL}/svc/topstories/v2/science.json?api-key=${API_KEY}`));

        act(() => {
            result.current.createData(mockNewData);
        });

        expect(result.current.loading).toBe(true);

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe('Failed to create data');
    });
})


