import  { useState } from 'react';
import { IAddBook } from '../interfaces/book.interface';
import ErrorDisplay from './ErrorDisplay';
import useRequestProcessor from '../hooks/useRequestProcessor';

const initialBook = {
  name: '',
  likes: 0,
  dateSaved: '',
  percentageRead: 0,
};

export default function LibraryPage() {
  const {
    data: books,
    loading: booksLoading,
    error, showForm,
    setError,
    setShowForm,
    createData
  } = useRequestProcessor(undefined, 'books')

  const [newBook, setNewBook] = useState<IAddBook>(initialBook);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleNewBookCreation = () => {
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

    createData(newBook)
  }

  return (
    <div className="container text-white mx-auto">
        <div className='flex items-center justify-between px-3'>
      <h1 className="md:text-3xl  font-bold mt-8 mb-4">My Library</h1>
      <button className="bg-mustard text-sm text-black font-semibold mt-3 md:px-4 md:py-2 py-1 px-2 rounded" onClick={() => setShowForm(!showForm)}>
        {!showForm ? 'Add New Book' : 'Close Form'}
      </button>
      </div>
      {showForm && (
        <div className="py-5 ">
          <h2 className="md:text-lg text-sm font-bold mb-2">Add New Book</h2>
          <div className='py-2  grid grid-cols-1 md:grid-cols-2 gap-3'>
            <input
              type="text"
              name="name"
              placeholder="Book Name"
              value={newBook.name}
              onChange={handleInputChange}
              className=" bg-shade   border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"
            />
            <input
              type="number"
              name="likes"
              
              placeholder="no of Likes"
              value={newBook.likes}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

            />
            <input
              type="date"
              name="dateSaved"
              value={newBook.dateSaved}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

            />
            <input
              type="number"
              name="percentageRead"
              placeholder="Percentage Read"
              value={newBook.percentageRead}
              onChange={handleInputChange}
              className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"
            />

            {error && <ErrorDisplay error={error} />}
          </div>
          <button className="bg-white text-sm md:text-base text-black font-semibold hover:bg-mustard hover:text-primary  px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault()
              handleNewBookCreation()
            }}
          >
            Add Book
          </button>
        </div>
      )}
      {books ? (<div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {books.map((book:any, index: number) => (
            <div key={index} className="bg-shade hover:bg-mustard hover:text-black rounded-xl p-4 mb-4 transition-all">
              <h2 className=" text-sm md:text-lg font-bold mb-2">{book.name}</h2>
              <p>Likes (Reviews): {book.likes}</p>
              <p>Date Saved: {book.dateSaved}</p>
              <p>Percentage Read: {book.percentageRead}%</p>
            </div>
          ))}
      </div>): <div>No books in the library at the moment</div>}
    </div>
  );
}
