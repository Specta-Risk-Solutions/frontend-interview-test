import { useEffect, useState } from "react";
// import book1 from "../assets/book1.jpg"
import book2 from "@local/assets/book2.jpg";
import { fetchBookList } from "@local/services/NYTimesAPI";
import { Book } from "@local/test/__mocks__/handler";


export default function BookListComponent(): JSX.Element {
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBookList() as Book;
                setBook(data);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            }
        };

        getBooks();
    }, []);

    return (
        <>

            <img src={book2} className='w-full md:h-40 h-14 rounded-lg object-cover' />

            <h1 className='md:text-3xl text-base text-primary font-bold my-5'>
				NYTimes Best Sellers - Hardcover Fiction
            </h1>

            {error ?
                <div className='w-full h-screen flex justify-center items-center'>
                    <p className='text-red-500'>Error: {error}</p>
                </div>
                : (
                    <>
                        {book ? (
                            <>
                                <h2 className='md:text-2xl text-sm font-bold mb-2'>
                                    {book.list_name}
                                </h2>
                                <p className='mb-4 font-light italic'>
                                    <span className='font-semibold'>Published Date:</span> {book.published_date}
                                </p>
                                <ul>
                                    {book.books.map(
                                        (book, index: number) => (
                                            <li
                                                key={index}
                                                className=' bg-shade hover:bg-primary hover:bg-opacity-5 py-3 mx-2 px-5 my-5  rounded-xl  transition-colors'
                                            >
                                                <p className='md:text-lg font-semibold'>
                                                    {book.rank}. {book.title}
                                                </p>{" "}
												by{" "}
                                                <span className=' font-semibold text-mustard  italic'>
                                                    {" "}
                                                    {book.author}
                                                </span>
                                                {book.book_image && (
                                                    <div className='flex md:flex-row flex-col mt-2 gap-2 '>
                                                        <img
                                                            src={book.book_image}
                                                            alt={book.title}
                                                            className='md:w-32 w-full h-40 rounded-lg md:h-auto md:mr-4'
                                                        />
                                                        <div className=' md:text-base text-sm'>
                                                            <p className='mb-2 font-light'>
                                                                <span className='font-semibold'>
																	Description:
                                                                </span>{" "}
                                                                {book.description}
                                                            </p>
                                                            <p className='mb-2'>
                                                                <span className='font-semibold'>
																	Publisher:
                                                                </span>{" "}
                                                                {book.publisher}
                                                            </p>
                                                            <ul className='md:flex md:flex-col grid grid-cols-2'>
                                                                {book.buy_links.map((link, i) => (
                                                                    <li key={i}>
                                                                        <a
                                                                            href={
                                                                                link.url
                                                                            }
                                                                            target='_blank'
                                                                            rel='noopener noreferrer'
                                                                            className='text-primary hover:underline'
                                                                        >
                                                                            {link.name}
                                                                        </a>
                                                                    </li>
                                                                )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </>
                        ) : (
                            <div className='w-full h-screen flex justify-center items-center'>
                                <span className="loading loading-spinner loading-md animate-spin-fast"></span>
                            </div>
                        )}
                    </>
                )
            }
        </>
    );
}
