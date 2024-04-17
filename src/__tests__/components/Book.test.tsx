import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Book from "../../components/Book";
import { IBook } from "../../interfaces/book.interface";

const mockBook: IBook = {
    rank: 1,
    title: 'Mock Book Title',
    author: 'Mock Author',
    book_image: 'mock_image_url.jpg',
    description: 'Mock book description',
    publisher: 'Mock Publisher',
    buy_links: [
        { url: 'https://amazon.com/bookid', name: 'Buy on Amazon' },
        { url: 'https://test.com', name: 'Buy on Test' },
    ],
    age_group: "",
    amazon_product_url: "",
    article_chapter_link: "",
    asterisk: 0,
    book_image_width: 0,
    book_image_height: 0,
    book_review_link: "",
    book_uri: "",
    contributor: "",
    contributor_note: "",
    dagger: 0,
    first_chapter_link: "",
    isbns: [],
    price: "",
    primary_isbn10: "",
    primary_isbn13: "",
    rank_last_week: 0,
    sunday_review_link: "",
    weeks_on_list: 0
};

describe('Book component', () => {
    it('renders book details correctly', () => {
        render(<Book book={mockBook} />);

        // Assert that the book details are rendered correctly
        expect(screen.getByText(`${mockBook.rank}. ${mockBook.title}`)).toBeInTheDocument();
        expect(screen.getByText(`${mockBook.author}`)).toBeInTheDocument();
        expect(screen.getByAltText(mockBook.title)).toBeInTheDocument();
        expect(screen.getByText(`${mockBook.description}`)).toBeInTheDocument();
        expect(screen.getByText(`${mockBook.publisher}`)).toBeInTheDocument();

        expect(screen.getByText(mockBook.buy_links[0].name)).toHaveAttribute('href', 'https://amazon.com/bookid');
        expect(screen.getByText(mockBook.buy_links[1].name)).toHaveAttribute('href', 'https://test.com');
    })
})
