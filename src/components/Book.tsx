import { IBook } from "../interfaces/book.interface"

interface BookProps {
    book: IBook
}

export default function Book({ book }: BookProps) {
    return (
        <li
            className=' bg-shade hover:bg-yellow-900 py-3 mx-2 px-5 my-5  rounded-xl  transition-colors'
        >
            <p className='md:text-lg font-semibold'>
                {book.rank}. {book.title}
            </p>{' '}
            by{' '}
            <span className=' font-semibold text-mustard  italic'>
                {' '}
                {book.author}
            </span>
            {book.book_image && (
                <div className='flex md:flex-row flex-col mt-2 gap-2 '>
                    <img
                        src={book.book_image}
                        alt={book.title}
                        className='md:w-32 w-full h-40 md:h-auto md:mr-4'
                    />
                    <div className=' md:text-base text-sm'>
                        <p className='mb-2'>
                            <span className='font-semibold'>
                                Description:
                            </span>{' '}
                            {book.description}
                        </p>
                        <p className='mb-2'>
                            <span className='font-semibold'>
                                Publisher:
                            </span>{' '}
                            {book.publisher}
                        </p>
                        <ul className='md:flex md:flex-col grid grid-cols-2'>
                            {book.buy_links.map(
                                (
                                    link: any,
                                    i: number
                                ) => (
                                    <li key={i}>
                                        <a
                                            href={
                                                link.url
                                            }
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-500 hover:underline'
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
}