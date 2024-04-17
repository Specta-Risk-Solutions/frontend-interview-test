import { saveBooks, getBooks } from "@local/utils/localStorage";

describe("localStorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("saves books to localStorage", () => {
        const books = [
            {
                name: "Book Name",
                likes: 10,
                dateSaved: "2021-09-01",
                percentageRead: 50,
            },
        ];

        saveBooks(books);

        const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
        expect(savedBooks).toEqual(books);
    });

    it("gets books from localStorage", () => {
        const books = [
            {
                name: "Book Name",
                likes: 10,
                dateSaved: "2021-09-01",
                percentageRead: 50,
            },
        ];

        localStorage.setItem("books", JSON.stringify(books));

        const retrievedBooks = getBooks();
        expect(retrievedBooks).toEqual(books);
    });
});
