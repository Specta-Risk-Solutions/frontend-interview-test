import { fetchArtsFeed } from '@local/services/NYTimesAPI';
import { useEffect, useState } from 'react';

export default function ArtsFeedComponent(): JSX.Element {
	const [articles, setArticles] = useState<any[] | null>(null);
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
		<>
			<h1 className='md:text-3xl font-bold text-primary px-2'>
				NY Times Arts Feed
			</h1>

			{error ?
				<div className='w-full h-screen flex justify-center items-center'>
					<p className='text-red-500'>Error: {error}</p>
				</div>
				: (
					<div>
						{articles ? (
							<>
								{articles.map((article, index) => (
									<div
										key={index}
										className=' bg-shade hover:bg-primary hover:bg-opacity-5 rounded-xl p-4 mb-4'
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
											<p className='md:text-base text-sm mb-2 opacity-90 font-light'>
												{article.description}
											</p>
										</div>

										<p className='text-sm font-light italic'>
											<span className='font-semibold'>Published Date:</span> {article.pubDate}
										</p>
										<p className='text-sm font-light italic'>
											<span className='font-semibold'>Category:</span> {article.category}
										</p>
										<a
											href={article.link}
											target='_blank'
											rel='noopener noreferrer'
											className='text-primary hover:underline'
										>
											Read More
										</a>
									</div>
								))}
							</>
						) : (
							<div className='w-full h-screen flex justify-center items-center'>
								<span className="loading loading-spinner loading-md animate-spin-fast"></span>
							</div>
						)}
					</div>
				)
			}

		</>
	);
}
