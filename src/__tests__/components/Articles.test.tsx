import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import useRequestProcessor from '../../hooks/useRequestProcessor';
import ArticlePage from '../../components/Articles';
import Loader from '../../components/Loader';
import ErrorDisplay from '../../components/ErrorDisplay';

jest.mock('../../hooks/useRequestProcessor');

describe('BookListComponent', () => {
    beforeEach(() => {
        // Mock the return value of the useRequestProcessor hook
        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: null,
            loading: false,
            error: null,
            showForm: false,
            createData: jest.fn(),
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
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<ArticlePage />);

        expect(<Loader />).not.toBeNull();
    });

    it('renders articles when loaded successfully', async () => {
        const mockArticles = {
        results: [
            { uri: 'article1', title: 'Article 1' },
            { uri: 'article2', title: 'Article 2' },
        ],
        };

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: mockArticles,
            loading: false,
            error: null,
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<ArticlePage />);

        await waitFor(() => {
            expect(screen.getByText('Article 1')).toBeInTheDocument();
            expect(screen.getByText('Article 2')).toBeInTheDocument();
        });
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
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<ArticlePage />);

        expect(<ErrorDisplay error={errorMessage} />).not.toBeNull();
  });
})
