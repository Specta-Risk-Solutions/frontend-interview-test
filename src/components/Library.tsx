import  { useState } from 'react';
import { IAddBook } from '../interfaces/book.interface';
import ErrorDisplay from './ErrorDisplay';
import useRequestProcessor from '../hooks/useRequestProcessor';
import BookForm from './BookForm';

export default function LibraryPage() {
  const {
    data: books,
    error, showForm,
    setError,
    setShowForm,
    createData,
    updateData
  } = useRequestProcessor(undefined, 'books')

  const [isCreating, setIsCreating] = useState(true)
  const [initialBook, setInitialBook] = useState<IAddBook>({
    name: '',
    likes: 0,
    dateSaved: '',
    percentageRead: 0,
  })

  const handleBookEditCreate = (bookData: any) => {
    if (isCreating) {
      createData(bookData)
    } else {
      updateData(bookData)
    }
  }

  const handleBookEdit = (book: IAddBook) => {
    setIsCreating(false)
    setInitialBook(book)
    setShowForm(true)
  }

  return (
    <div className="container text-white mx-auto">
        <div className='flex items-center justify-between px-3'>
      <h1 className="md:text-3xl  font-bold mt-8 mb-4">My Library</h1>
      <button id='newbook-btn' className="bg-mustard text-sm text-black font-semibold mt-3 md:px-4 md:py-2 py-1 px-2 rounded" onClick={() => setShowForm(!showForm)}>
        {!showForm ? 'Add New Book' : 'Close Form'}
      </button>
      </div>
      {showForm && (
        <BookForm onSubmit={handleBookEditCreate} setError={setError} initialFormData={initialBook} error={error} />
      )}
      {books ? (<div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {books.map((book:any, index: number) => (
            <div key={index} className="book bg-shade hover:bg-mustard hover:text-black rounded-xl p-4 mb-4 transition-all">
              <div className="controls flex items-center justify-end gap-2 mb-5">
                <button onClick={() => handleBookEdit(book)} className='bg-yellow-200 w-16 p-1 text-black rounded-md'>Edit</button>
                <button className='bg-red-600 w-16 p-1 rounded-md'>Delete</button>
              </div>
              <div>
                <h2 className=" text-sm md:text-lg font-bold mb-2">{book.name}</h2>
                <p>Likes (Reviews): {book.likes}</p>
                <p>Date Saved: {book.dateSaved}</p>
                <p>Percentage Read: {book.percentageRead}%</p>
              </div>
            </div>
          ))}
      </div>): <div>No books in the library at the moment</div>}
    </div>
  );
}
