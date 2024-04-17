import { useEffect, useState } from "react";
import { IAddBook } from "../interfaces/book.interface";
import ErrorDisplay from "./ErrorDisplay";

interface BookFormProps {
    initialFormData: IAddBook,
    onSubmit: (param: IAddBook) => void,
    setError: (param: string) => void,
    error: string
}

export default function BookForm({ initialFormData, onSubmit, setError, error }: BookFormProps) {
    const [newBook, setNewBook] = useState<IAddBook>(initialFormData);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleNewBookEditCreation = () => {
        if (!newBook['name']) {
        setError('Book name is required!')
        return;
        }
        if (!newBook['dateSaved']) {
        setError('Date is required!')
        return;
        }
        if (newBook['likes'] <= 0) {
        setError('Likes must be positive!')
        return;
        }
        if (newBook['percentageRead'] <= 0) {
        setError('Percentage read must be positive!')
        return;
        }

        onSubmit(newBook)
    }
    useEffect(() => {
        setNewBook(initialFormData);
    }, [initialFormData]);
    return (
        <div className="py-5 ">
          <h2 className="md:text-lg text-sm font-bold mb-2">Add New Book</h2>
          <div className='py-2  grid grid-cols-1 md:grid-cols-2 gap-3'>
            <input
              type="text"
              name="name"
              id='name-field'
              placeholder="Book Name"
              value={newBook.name}
              onChange={handleInputChange}
              className=" bg-shade   border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"
            />
            <input
              type="number"
              name="likes"
              id='like-field'
              placeholder="no of Likes"
              value={newBook.likes}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

            />
            <input
              type="date"
              name="dateSaved"
              id='date-field'
              value={newBook.dateSaved}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

            />
            <input
              type="number"
              name="percentageRead"
              id='percentage-field'
              placeholder="Percentage Read"
              value={newBook.percentageRead}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"
            />

            {error && <ErrorDisplay error={error} />}
          </div>
          <button id='add-btn' className="bg-white text-sm md:text-base text-black font-semibold hover:bg-mustard hover:text-primary  px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault()
              handleNewBookEditCreation()
            }}
          >
            Add Book
          </button>
        </div>
    )
}