import { fetchArticles, fetchArtsFeed, fetchBookList } from "@local/services/NYTimesAPI";
import { server } from "../__mocks__/server";
import { HttpResponse, http } from "msw";

describe("fetchArticles", () => {

    test("returns articles", async () => {
        const articles = await fetchArticles();
        expect(articles).toHaveLength(1);
    });

    test("handles server error", async () => {
        server.use(
            http.get("https://api.nytimes.com/svc/topstories/v2/science.json", () => {
                return new HttpResponse(null, { status: 400 })
            })
        );

        try {
            await fetchArticles();
        } catch (error) {
            if (error instanceof Error) expect(error.message).toBe("Failed to fetch articles");
        }
    });
})

describe("fetchArtsFeed", () => {
    test("returns art feeds", async () => {
        // TODO: Fix this test
        // const artFeed = await fetchArtsFeed();
        // expect(articles).toHaveLength(1);
    });

    test("handles server error", async () => {
        server.use(
            http.get("https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml", () => {
                return new HttpResponse(null, { status: 400 })
            })
        );

        try {
            await fetchArtsFeed();
        } catch (error) {
            if (error instanceof Error) expect(error.message).toBe("Failed to fetch arts feed");
        }
    });
})

describe("fetchBookList", () => {
    test("returns book list", async () => {
        const books = await fetchBookList();
        expect(books).toHaveProperty("books");
        expect(books.books).toHaveLength(1);
    });

    test("handles server error", async () => {
        server.use(
            http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json", () => {
                return new HttpResponse(null, { status: 400 })
            })
        );

        try {
            await fetchArticles();
        } catch (error) {
            if (error instanceof Error) expect(error.message).toBe("Failed to fetch articles");
        }
    });
})
