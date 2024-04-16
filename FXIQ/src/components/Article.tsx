export default function Article({ article }: any) {
    return (
        <div
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
    )
}