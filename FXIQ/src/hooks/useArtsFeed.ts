import { useEffect, useState } from "react";

export default function useArtsFeed(url: string) { 

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch arts feed');
            }

            const data = await response.text();
            const parser = new DOMParser();
            const xmlDocument = parser.parseFromString(data, 'text/xml');
            const items = xmlDocument.querySelectorAll('item');

            const articlesData = Array.from(items).map((item) => {
                return {
                    title: item.querySelector('title')?.textContent,
                    link: item.querySelector('link')?.textContent,
                    description:
                        item.querySelector('description')?.textContent,
                    pubDate: item.querySelector('pubDate')?.textContent,
                    category: item.querySelector('category')?.textContent,
                    image: item
                        .querySelector('media\\:content, [url]')
                        ?.getAttribute('url'), // Adjust this selector based on the structure of the feed
                };
            });
            setData(articlesData);
            setError('');
        } catch (error) {
            // setError(error?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return {
        data,
        loading,
        error
    }

}