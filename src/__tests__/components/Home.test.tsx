import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import useRequestProcessor from '../../hooks/useRequestProcessor';
import Home from '../../components/Home';
import Loader from '../../components/Loader';
import ErrorDisplay from '../../components/ErrorDisplay';

jest.mock('../../hooks/useRequestProcessor');

describe('BookListComponent', () => {
    beforeEach(() => {
        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: null,
            loading: false,
            error: null,
            showForm: false, // Add default values for additional properties
            createData: jest.fn(),
            updateData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });
    });

    it('renders loading indicator when loading data', async () => {
        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: null,
            loading: true,
            error: null,
            showForm: false, // Add default values for additional properties
            createData: jest.fn(),
            updateData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<Home />);

        // Assert that loading indicator is rendered
        expect(<Loader />).not.toBeNull();
    });

    it('renders book list when data is loaded', async () => {
        const mockBookList = {
            results: {
                list_name: 'Test List',
                published_date: '2022-04-01',
                books: [
                { book_uri: '1', title: 'Book 1' },
                { book_uri: '2', title: 'Book 2' },
                ],
            },
        };

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: mockBookList,
            loading: false,
            error: null,
            showForm: false,
            createData: jest.fn(),
            updateData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<Home />);

        expect(screen.getByText(mockBookList.results.list_name)).toBeInTheDocument();
    });

    it('renders error display when there is an error', async () => {
        const errorMessage = 'Failed to fetch articles';

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: null,
            loading: false,
            error: errorMessage,
            showForm: false,
            createData: jest.fn(),
            updateData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<Home />);

        expect(<ErrorDisplay error={errorMessage} />).not.toBeNull();
  });
})