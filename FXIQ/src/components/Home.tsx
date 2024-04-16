import book2 from '../assets/book2.jpg';
import useDataFetch from '../hooks/useDataFetch';
import { API_KEY, BASE_URL } from '../constants/url-details';
import Book from './Book';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';

export default function BookListComponent(): JSX.Element {
	const url = `${BASE_URL}/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
	const { data: bookList, loading: bookLoading, error } = useDataFetch(url)

	return (
		<div className='bg-primary text-white md:p-8 overflow-scroll'>
			<img src={book2} className='w-full md:h-40 h-14  object-cover' />
			<h1 className='md:text-3xl text-base text-mustard font-bold  my-5'>
				NYTimes Best Sellers - Hardcover Fiction
			</h1>
			{bookLoading ? (
				<Loader />
			) : (bookList ?
					
					<div className=''>
						<h2 className='md:text-2xl text-sm font-bold mb-2'>
							{bookList?.results.list_name}
						</h2>
						<p className='mb-4'>
							Published Date: {bookList?.results.published_date}
						</p>
						<ul>
							{bookList?.results.books.map(
								(book: any, index: number) => (
									<Book book={book} key={book.book_uri} />
								)
							)}
						</ul>
					</div>
				: <ErrorDisplay error={error} />
			)}
		</div>
	);
}
