import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Article from '../../components/Article';

describe('Article component', () => {
    it('renders article details without multimedia', () => {
        const mockArticle = {
            title: 'Mock Article Title',
            abstract: 'Mock article abstract',
            published_date: '2022-04-01',
            byline: 'Mock Author',
            url: 'https://example.com/article',
            uri: "nyt://embeddedinteractive/daba9d03-29b8-5cfc-8cbd-74b8abf54a07",
            multimedia: [],
        };

        render(<Article article={mockArticle} />);

        expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
        expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
        expect(screen.getByText('Read More')).toHaveAttribute('href', mockArticle.uri);
    });

    it('renders article details with multimedia', () => {
        const mockArticle = {
        title: 'Mock Article Title',
        abstract: 'Mock article abstract',
        published_date: '2022-04-01',
        byline: 'Mock Author',
        url: 'https://randomsite.com/article',
        uri: "nyt://embeddedinteractive/daba9d03-29b8-5cfc-8cbd-74b8abf54a07",
        multimedia: [{ url: 'https://randomsite.com/image.jpg' }],
        };

        render(<Article article={mockArticle} />);

        expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
        expect(screen.getByText(mockArticle.abstract)).toBeInTheDocument();
        expect(screen.getByText('Read More')).toHaveAttribute('href', mockArticle.uri);

        const multimediaElement = screen.getByAltText(mockArticle.title);
        expect(multimediaElement).toBeInTheDocument();
    });
})