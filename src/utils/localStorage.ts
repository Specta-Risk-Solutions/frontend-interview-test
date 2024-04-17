
type Book = {
    name: string;
    likes: number;
    dateSaved: string;
    percentageRead: number;
};

export function saveBooks(books: Book[]) {
    localStorage.setItem("books", JSON.stringify(books));
}

export function getBooks(): Book[] {
    const books = localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
}
