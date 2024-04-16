import { getBooks, saveBooks } from '@local/utils/localStorage';
import { useState } from 'react';

const initialBook = {
    name: '',
    likes: 0,
    dateSaved: '',
    percentageRead: 0,
};

export default function LibraryPage() {
    const books = getBooks();

    const [newBook, setNewBook] = useState(initialBook);
    const [showForm, setShowForm] = useState(false);

    const [errors, setErrors] = useState({ name: '', likes: '', dateSaved: '', percentageRead: '' });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
        setErrors({ ...errors, [name]: value ? '' : `${name} is required` });
    };

    const handleAddBook = () => {
        const { name, likes, dateSaved, percentageRead } = newBook;
        if (!name || !likes || !dateSaved || !percentageRead) {
            setErrors({
                name: name ? '' : 'Name is required',
                likes: likes ? '' : 'Likes is required',
                dateSaved: dateSaved ? '' : 'Date Saved is required',
                percentageRead: percentageRead ? '' : 'Percentage Read is required',
            });
            return;
        }
        saveBooks([...books, newBook]);
        setNewBook(initialBook);
        setShowForm(false);
    };

    return (
        <div className="container text-white mx-auto">
            <div className='flex items-center justify-between px-3'>
                <h1 className="md:text-3xl  font-bold mt-8 mb-4">My Library</h1>
                <button className="bg-mustard text-sm text-black font-semibold mt-3 md:px-4 md:py-2 py-1 px-2 rounded" onClick={() => setShowForm(true)}>
                    Add New Book
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
                        {errors.name && <div className="error">{errors.name}</div>}
                        
                        <input
                            type="number"
                            name="likes"
                            placeholder="no of Likes"
                            value={newBook.likes}
                            onChange={handleInputChange}
                            className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

                        />
                        {errors.likes && <div className="error">{errors.likes}</div>}

                        <input
                            type="date"
                            name="dateSaved"
                            value={newBook.dateSaved}
                            onChange={handleInputChange}
                            className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"

                        />
                        {errors.dateSaved && <div className="error">{errors.dateSaved}</div>}
                        <input
                            type="number"
                            name="percentageRead"
                            placeholder="Percentage Read"
                            value={newBook.percentageRead}
                            onChange={handleInputChange}
                            className=" bg-shade  border-mustard md:py-3 md:px-3 px-2 py-2 border-b-2"
                        />
                        {errors.percentageRead && <div className="error">{errors.percentageRead}</div>}
                    </div>
                    <button className="bg-white text-sm md:text-base text-black font-semibold hover:bg-mustard hover:text-primary  px-4 py-2 rounded" onClick={handleAddBook}>
                        Add Book
                    </button>
                </div>
            )}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                {books.map((book, index) => (
                    <div key={index} className="bg-shade hover:bg-mustard hover:text-black rounded-xl p-4 mb-4">
                        <h2 className=" text-sm md:text-lg font-bold mb-2">{book.name}</h2>
                        <p>Likes (Reviews): {book.likes}</p>
                        <p>Date Saved: {book.dateSaved}</p>
                        <p>Percentage Read: {book.percentageRead}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
