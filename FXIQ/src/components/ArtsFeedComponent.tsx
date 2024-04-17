import { BASE_URL } from '../constants/url-details';
import useArtsFeed from '../hooks/useArtsFeed';
import ErrorDisplay from './ErrorDisplay';
import Loader from './Loader';

export default function ArtsFeedComponent(): JSX.Element {
	const url = `${BASE_URL}/services/xml/rss/nyt/Arts.xml`
	const { data: feeds, loading: feedsLoading, error } = useArtsFeed(url)

	return (
		<div className='container bg-primary mx-auto'>
			<h1 className='md:text-3xl font-bold mt-8 my-5 text-mustard px-2'>
				NY Times Arts Feed
			</h1>
			{error && <p className='text-red-500'>Error: {error}</p>}
			{feedsLoading ? <Loader /> :
				(feeds ? <div>
					{feeds.map((feed: any, index: number) => (
						<div
							key={index}
							className=' bg-shade hover:bg-yellow-900 rounded-xl p-4 mb-4 text-white '
						>
							<h2 className='md:text-lg font-bold mb-2'>
								{feed.title}
							</h2>
							<div className='flex flex-col md:flex-row gap-3 items-center'>
								{' '}
								{feed.images && (
									<img
										src={feed.image}
										alt={feed.title}
										className=' h-40 object-contain rounded-xl'
									/>
								)}
								<p className='md:text-base text-sm text-white mb-2'>
									{feed.description}
								</p>
							</div>
							<p className='text-sm'>
								Published Date: {feed.pubDate}
							</p>
							<p className='text-sm'>Category: {feed.category}</p>
							<a
								href={feed.link}
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-500 hover:underline'
							>
								Read More
							</a>
						</div>
					))}
			</div> : <ErrorDisplay error={error} />)}
		</div>
	);
}
