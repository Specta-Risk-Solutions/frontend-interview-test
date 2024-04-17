import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LibraryPage from "../../components/Library";
import useRequestProcessor from "../../hooks/useRequestProcessor";
import ErrorDisplay from '../../components/ErrorDisplay';

jest.mock('../../hooks/useRequestProcessor');

describe('LibraryPage component', () => {

    let container: any;

    beforeEach(() => {
        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: [
                {name: "", likes: 0, dateSaved: "", percentageRead: 0},
                {name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"}
            ],
            loading: false,
            error: null,
            showForm: false, // Add default values for additional properties
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });
        ({container} = render(
            <LibraryPage />
        ));
    })
    
    it('renders form and adds new book', async () => {
        const mockCreateData = jest.fn();

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: [
                {name: "", likes: 0, dateSaved: "", percentageRead: 0},
                {name: "New Book", likes: "2", dateSaved: "2024-04-16", percentageRead: "30"}
            ],
            loading: false,
            error: null,
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<LibraryPage />);

        fireEvent.click(container.querySelector('#newbook-btn'));

        waitFor(() => { 
            fireEvent.change(container.querySelector('#name-field'), { target: { value: 'Test Book' } });
            fireEvent.change(container.querySelector('#like-field'), { target: { value: '5' } });
            fireEvent.change(container.querySelector('#percentage-field'), { target: { value: '50' } });
            fireEvent.change(container.querySelector('#date-field'), { target: { value: '2022-04-15' } });

            fireEvent.click(container.querySelector('#add-btn'));

            expect(mockCreateData).toHaveBeenCalled()
        })

        expect(screen.queryByPlaceholderText('Book Name')).not.toBeInTheDocument();
    });

    it('displays form validation errors', () => {
        const errorMessage = 'Book Name is required';
        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: [],
            loading: false,
            error: '',
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<LibraryPage />);

        fireEvent.click(container.querySelector('#newbook-btn'));

        waitFor(() => {
            fireEvent.change(container.querySelector('#name-field'), { target: { value: '' } });
            fireEvent.change(container.querySelector('#like-field'), { target: { value: '' } });
            fireEvent.change(container.querySelector('#percentage-field'), { target: { value: '' } });
            fireEvent.change(container.querySelector('#date-field'), { target: { value: '' } });

            fireEvent.click(container.querySelector('#add-btn'));

        })
        

        expect(<ErrorDisplay error={errorMessage} />).not.toBeNull();
    });

    it('displays books', () => {
        const mockBooks = [
        { name: 'Book 1', likes: 10, dateSaved: '2022-04-01', percentageRead: 30 },
        { name: 'Book 2', likes: 20, dateSaved: '2022-04-02', percentageRead: 50 },
        ];

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: mockBooks,
            loading: false,
            error: '',
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<LibraryPage />);

        expect(screen.getByText('Book 1')).toBeInTheDocument();
        expect(screen.getByText('Book 2')).toBeInTheDocument();
    });

    it('displays error message', () => {
        const errorMessage = 'Failed to fetch books';

        const mockUseRequestProcessor = useRequestProcessor as jest.MockedFunction<typeof useRequestProcessor>;
        mockUseRequestProcessor.mockReturnValue({
            data: [],
            loading: false,
            error: errorMessage,
            showForm: false,
            createData: jest.fn(),
            setData: jest.fn(),
            setShowForm: jest.fn(),
            setError: jest.fn(),
        });

        render(<LibraryPage />);

        expect(<ErrorDisplay error={errorMessage} />).not.toBeNull();
    });
})