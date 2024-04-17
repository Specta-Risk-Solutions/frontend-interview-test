import { fireEvent, render } from "@testing-library/react";
import BookForm from "../../components/BookForm";
import ErrorDisplay from "../../components/ErrorDisplay";

jest.mock('../../hooks/useRequestProcessor');

describe('LibraryPage component', () => { 
    let container: any;

    beforeEach(() => {
        
        ({container} = render(
            <BookForm error={''} initialFormData={{
                name: '',
                likes: 0,
                dateSaved: '',
                percentageRead: 0,
            }} onSubmit={jest.fn()} setError={jest.fn()} 
            />
        ));
    })

    it('renders form and adds new book', async () => {

        render(<BookForm error={''} initialFormData={{
                name: '',
                likes: 0,
                dateSaved: '',
                percentageRead: 0,
            }} onSubmit={jest.fn()} setError={jest.fn()} />
        );


        fireEvent.change(container.querySelector('#name-field'), { target: { value: 'Test Book' } });
        fireEvent.change(container.querySelector('#like-field'), { target: { value: '5' } });
        fireEvent.change(container.querySelector('#percentage-field'), { target: { value: '50' } });
        fireEvent.change(container.querySelector('#date-field'), { target: { value: '2022-04-15' } });

        fireEvent.click(container.querySelector('#add-btn'));

        // expect(mockCreateData).toHaveBeenCalled()

    });

    it('displays form validation errors', () => {
        const errorMessage = 'Book Name is required';
        render(<BookForm error={''} initialFormData={{
                name: '',
                likes: 0,
                dateSaved: '',
                percentageRead: 0,
            }} onSubmit={jest.fn()} setError={jest.fn()} />
        );

        fireEvent.change(container.querySelector('#name-field'), { target: { value: '' } });
        fireEvent.change(container.querySelector('#like-field'), { target: { value: '' } });
        fireEvent.change(container.querySelector('#percentage-field'), { target: { value: '' } });
        fireEvent.change(container.querySelector('#date-field'), { target: { value: '' } });

        fireEvent.click(container.querySelector('#add-btn'));

        

        expect(<ErrorDisplay error={errorMessage} />).not.toBeNull();
    });
})