import { fetchArticles } from "@local/services/NYTimesAPI";
import { useEffect, useState } from "react";
import { Article } from "@local/test/__mocks__/handler";

export default function ArticlePage(): JSX.Element {
    const [articles, setArticles] = useState<Article | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            }
        };

        getArticles();
    }, []);

    return (
        <>
            <h1 className='md:text-3xl font-bold text-primary mx-2'>
				NY Times Top Science Stories
            </h1>

            {error ?
                <div className='w-full h-screen flex justify-center items-center'>
                    <p className='text-red-500'>Error: {error}</p>
                </div>
                : (
                    <>
                        {articles ? (
                            <>
                                {articles.map((article, index) => (
                                    <div key={index}>
                                        {!article.title ? (
                                            <></>
                                        ) : (
                                            <div
                                                className=' bg-shade my-5 rounded-xl flex flex-col px-2 py-5'
                                            >
                                                <h2 className='md:text-lg font-bold mb-2'>
                                                    {article.title}
                                                </h2>
                                                <p className='text-mustard my-2 font-light'>{article.abstract}</p>
                                                <p className='text-xs md:text-sm font-light'>
                                                    <span className='font-semibold'>Published Date:</span> {article.published_date}
                                                </p>
                                                {article.url !== "null" && (
                                                    <a
                                                        href={article.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-primary hover:underline'
                                                    >
														Read More
                                                    </a>
                                                )}
                                                {article.multimedia &&
													article.multimedia.length > 0 && (
                                                    <img
                                                        src={article.multimedia[0].url}
                                                        alt={article.title}
                                                        className=' md:h-52 w-full object-cover rounded-lg my-2'
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className='w-full h-screen flex justify-center items-center'>
                                <span className="loading loading-spinner loading-md animate-spin-fast"></span>
                            </div>
                        )}
                    </>
                )}
        </>
    );
}
