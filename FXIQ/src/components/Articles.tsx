import { API_KEY, BASE_URL } from '../constants/url-details';
import useDataFetch from '../hooks/useDataFetch';
import Article from './Article';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';

export default function ArticlePage(): JSX.Element {
	const url = `${BASE_URL}/svc/topstories/v2/science.json?api-key=${API_KEY}`
	const { data: articles, loading: articlesLoading, error } = useDataFetch(url)

	return (
		<div className='container bg-primary mx-auto'>
			<h1 className='md:text-3xl font-bold text-mustard my-5 mx-2'>
				NY Times Top Science Stories
			</h1>
			{ articlesLoading ? <Loader /> :
				(articles? 
					<div className='text-white '>
						{articles?.results.map((article: any, index: number) => (
							<Article article={article} key={article.uri} />
						))}
					</div> :
					<ErrorDisplay error={error} />
				)
			}
		</div>
	);
}
