import { fetchArtsFeed } from '@local/services/NYTimesAPI';
import { useEffect, useState } from 'react';

export default function ArtsFeedComponent(): JSX.Element {
	const [articles, setArticles] = useState<any[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getArtsFeed = async () => {
			try {
				const data = await fetchArtsFeed();
				setArticles(data);
			} catch (error: any) {
				setError(error.message);
				console.error(error);
			}
		};

		getArtsFeed();
	}, []);

	return (
		<div className='container bg-primary mx-auto'>
			<h1 className='md:text-3xl font-bold mt-8 my-5 text-mustard px-2'>
				NY Times Arts Feed
			</h1>
			{error && <p className='text-red-500'>Error: {error}</p>}
			<div>
				{articles.map((article, index) => (
					<div
						key={index}
						className=' bg-shade hover:bg-yellow-900 rounded-xl p-4 mb-4 text-white '
					>
						<h2 className='md:text-lg font-bold mb-2'>
							{article.title}
						</h2>
						<div className='flex flex-col md:flex-row gap-3 items-center'>
							{' '}
							{article.images && (
								<img
									src={article.image}
									alt={article.title}
									className=' h-40 object-contain rounded-xl'
								/>
							)}
							<p className='md:text-base text-sm text-white mb-2'>
								{article.description}
							</p>
						</div>
						<p className='text-sm'>
							Published Date: {article.pubDate}
						</p>
						<p className='text-sm'>Category: {article.category}</p>
						<a
							href={article.link}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:underline'
						>
							Read More
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
