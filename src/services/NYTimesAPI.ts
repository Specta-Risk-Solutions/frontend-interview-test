import { Article, Book } from "@local/test/__mocks__/handler";

const key = process.env.VITE_NYTIMES_API_KEY;

export async function fetchArticles() {
    const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch articles");
    }
    const data = await response.json();
    return data.results as Article;
}

export async function fetchArtsFeed() {
    const response = await fetch(
        "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch arts feed");
    }
    const data = await response.text();
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(data, "text/xml");
    const items = xmlDocument.querySelectorAll("item");
    const articlesData = Array.from(items).map((item) => {
        return {
            title: item.querySelector("title")?.textContent,
            link: item.querySelector("link")?.textContent,
            description: item.querySelector("description")?.textContent,
            pubDate: item.querySelector("pubDate")?.textContent,
            category: item.querySelector("category")?.textContent,
            image: item.querySelector("media\\:content, [url]")?.getAttribute("url"),
        };
    });
    return articlesData;
}

export async function fetchBookList() {
    const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch book list");
    }
    const data = await response.json();
    return data.results as Book;
}
