export interface IBook {
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    asterisk: number;
    author: string;
    book_image: string;
    book_image_height: number;
    book_image_width: number;
    book_review_link: string;
    book_uri: string;
    buy_links: IBuyLink[];
    contributor: string;
    contributor_note: string;
    dagger: number;
    description: string;
    first_chapter_link: string;
    isbns: IISBN[];
    price: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    weeks_on_list: number;
}

export interface IBuyLink {
    name: string;
    url: string;
}

export interface IISBN {
    isbn10: string;
    isbn13: string;
}

export interface IAddBook {
    name: string;
    likes: number;
    dateSaved: string;
    percentageRead: number;
}
