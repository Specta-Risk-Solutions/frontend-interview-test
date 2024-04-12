import { useEffect, useState } from 'react';

export default function ArticlePage(): JSX.Element {
	const [articles, setArticles] = useState<any[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(
					'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=<your-api-key>'
				);

				if (!response.ok) {
					throw new Error('Failed to fetch articles');
				}

				const data = await response.json();
				setArticles(data.results);
			} catch (error: any) {
				setError(error.message);
				console.error(error);
			}
		};

		fetchArticles();
	}, []);

	return (
		<div className='container bg-primary mx-auto'>
			<h1 className='md:text-3xl font-bold text-mustard my-5 mx-2'>
				NY Times Top Science Stories
			</h1>
			{error && <p className='text-red-500'>Error: {error}</p>}
			<div className='text-white '>
				{articles.map((article, index) => (
					<div
						key={index}
						className=' bg-shade my-5 rounded-xl flex flex-col px-2 py-5'
					>
						<h2 className='md:text-lg font-bold mb-2'>
							{article.title}
						</h2>
						<p className='text-mustard my-2'>{article.abstract}</p>
						<p className='text-xs  md:text-sm'>
							Published Date: {article.published_date}
						</p>
						<p className='text-xs md:text-sm'>
							By: {article.byline}
						</p>
						<a
							href={article.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:underline'
						>
							Read More
						</a>
						{article.multimedia &&
							article.multimedia.length > 0 && (
								<img
									src={article.multimedia[0].url}
									alt={article.title}
									className=' md:h-52 w-full object-cover'
								/>
							)}
					</div>
				))}
			</div>
		</div>
	);
}
