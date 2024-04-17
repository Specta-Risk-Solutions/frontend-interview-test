import { render, screen, waitFor } from '@testing-library/react';
import ArticlePage from '@local/components/Articles';
import '@testing-library/jest-dom';
// import { articles } from './__mocks__';



describe('ArticlePage', () => {

    test('renders without error', async () => {
        render(<ArticlePage />);
        const headingElement = await screen.findByText(/NY Times Top Science Stories/i);
        expect(headingElement).toBeInTheDocument();
    });

    // test('Display article data', async () => {
    //     jest.spyOn(window, 'fetch').mockImplementationOnce(articles as any);

    //     const { container } = render(<ArticlePage />);
    //     const headingElement = await screen.findByText(/NY Times Top Science Stories/i);
    //     expect(headingElement).toBeInTheDocument();

    //     // Wait for the loading spinner to disappear
    //     await waitFor(() => {
    //         expect(container.getElementsByClassName('loading').length).toBe(0);
    //     });

    //     await waitFor(() => {
    //         const errorElement = screen.getByText(/Error/i);
    //         expect(errorElement).toBeInTheDocument();
    //     });
    // });

    test('handles server error', async () => {
        global.fetch.mockResolvedValue({
            ok: true,
            json: () => pokemon  // note no stringify, just the data
          });

        render(<ArticlePage />);
        const headingElement = await screen.findByText(/NY Times Top Science Stories/i);
        expect(headingElement).toBeInTheDocument();

        await waitFor(() => {
            const errorElement = screen.getByText(/Error/i);
            expect(errorElement).toBeInTheDocument();
        });
    });
});
