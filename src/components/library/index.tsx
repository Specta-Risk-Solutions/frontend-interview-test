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
        <>
            <div className='flex items-center justify-between px-3 pb-5'>
                <h1 className="md:text-3xl font-bold mb-4 text-primary">My Library</h1>
                <button className="btn" onClick={() => setShowForm(true)}>
                    Add New Book
                </button>
            </div>
            {showForm && (
                <div className="py-5">
                    <h2 className="md:text-lg text-sm font-bold mb-2">Add New Book</h2>
                    <div className='py-2 grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className="form-control w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Book Name"
                                value={newBook.name}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                            <div className="label">
                                {errors.name && (
                                    <span className="label-text-alt text-error">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                        </label>

                        <label className="form-control w-full">
                            <input
                                type="number"
                                name="likes"
                                min={0}
                                placeholder="no of Likes"
                                value={newBook.likes}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                            <div className="label">
                                {errors.likes && (
                                    <span className="label-text-alt text-error">
                                        {errors.likes}
                                    </span>
                                )}
                            </div>
                        </label>

                        <label className="form-control w-full">
                            <input
                                type="date"
                                name="dateSaved"
                                value={newBook.dateSaved}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                            <div className="label">
                                {errors.dateSaved && (
                                    <span className="label-text-alt text-error">
                                        {errors.dateSaved}
                                    </span>
                                )}
                            </div>
                        </label>

                        <label className="form-control w-full">
                            <input
                                type="number"
                                name="percentageRead"
                                min={0}
                                placeholder="Percentage Read"
                                value={newBook.percentageRead}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                            <div className="label">
                                {errors.percentageRead && (
                                    <span className="label-text-alt text-error">
                                        {errors.percentageRead}
                                    </span>
                                )}
                            </div>
                        </label>

                    </div>

                    <div className='w-full text-center'>
                        <button className="btn btn-primary rounded-2xl w-full max-w-sm" onClick={handleAddBook}>
                            Add Book
                        </button>
                    </div>

                    <hr className="my-3 border-d-dim dark:border-dim" />

                </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
                {books.map((book, index) => (
                    <div key={index} className="bg-shade hover:bg-primary hover:bg-opacity-5 rounded-xl p-4 mb-4 border border-d-dim dark:border-dim">
                        <h2 className=" text-sm md:text-lg font-bold mb-2 text-primary">{book.name}</h2>
                        <p className='font-light'>
                            <span className='font-normal'>Likes (Reviews):</span> {book.likes}
                        </p>
                        <p className='font-light'>
                            <span className='font-normal'>Date Saved:</span> {book.dateSaved}
                        </p>
                        <p className='font-light'>
                            <span className='font-normal'>Percentage Read:</span> {book.percentageRead}%
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
