import { http, HttpResponse } from 'msw';

const articles = {
    status: "OK",
    section: "Science",
    last_updated: "2024-04-16T13:01:19-04:00",
    num_results: 27,
    results: [
        {
            abstract: "Rising sea temperatures around the planet have caused a bleaching event that is expected to be the most extensive on record.",
            byline: "By Catrin Einhorn",
            created_date: "2024-04-15T11:01:03-04:00",
            des_facet: ["Coral", "Reefs", "Global Warming", "Fish and Other Marine Life", "Oceans and Seas"],
            geo_facet: ["Great Barrier Reef (Australia)"],
            item_type: "Article",
            kicker: "",
            material_type_facet: "",
            multimedia: [
                {
                    caption: null,
                    credit: null,
                    crop_name: "articleLarge",
                    height: 400,
                    legacy: {
                        xlarge: "images/2024/04/15/climate/15CLI-CORAL/15CLI-CORAL-articleLarge.jpg",
                        xlargeheight: 400,
                        xlargewidth: 600
                    },
                    rank: 0,
                    subType: "xlarge",
                    subtype: "xlarge",
                    type: "image",
                    url: "images/2024/04/15/climate/15CLI-CORAL/15CLI-CORAL-articleLarge.jpg",
                    width: 600
                },
                {
                    caption: null,
                    credit: null,
                    crop_name: "thumbWide",
                    height: 126,
                    legacy: {
                        wide: "images/2024/04/15/climate/15CLI-CORAL/15CLI-CORAL-thumbWide.jpg",
                        wideheight: 126,
                        widewidth: 190
                    },
                    rank: 0,
                    subType: "wide",
                    subtype: "wide",
                    type: "image",
                    url: "images/2024/04/15/climate/15CLI-CORAL/15CLI-CORAL-thumbWide.jpg",
                    width: 190
                },
                {
                    caption: null,
                    credit: null,
                    crop_name: "thumbStandard",
                    height: 75,
                    legacy: {
                        thumbnail: "images/2024/04/15/climate/15CLI-CORAL/15CLI-CORAL-thumbStandard.jpg",
                        thumbnailheight: 75,
                        thumbnailwidth: 75
                    },
                    rank: 0,
                    subType: ""
                }
            ],
            org_facet: ["National Oceanic and Atmospheric Administration"],
            per_facet: [],
            published_date: "2024-04-15T11:01:03-04:00",
            section: "climate",
            short_url: "",
            subsection: "",
            title: "The Widest-Ever Global Coral Crisis Will Hit Within Weeks, Scientists Say",
            updated_date: "2024-04-16T08:37:09-04:00",
            uri: "nyt://article/aedf4e44-a24e-5a35-b52d-f985c3586596",
            url: "https://www.nytimes.com/2024/04/15/climate/coral-reefs-bleaching.html"
        }
    ]
}

const books = {
    status: "OK",
    copyright: "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
    num_results: 15,
    last_modified: "2024-04-10T22:25:23-04:00",
    results: {
        list_name: "Hardcover Fiction",
        list_name_encoded: "hardcover-fiction",
        bestsellers_date: "2024-04-06",
        published_date: "2024-04-21",
        published_date_description: "latest",
        next_published_date: "",
        previous_published_date: "2024-04-14",
        display_name: "Hardcover Fiction",
        normal_list_ends_at: 15,
        updated: "WEEKLY",
        books: [
            {
                rank: 1,
                rank_last_week: 1,
                weeks_on_list: 9,
                asterisk: 0,
                dagger: 0,
                primary_isbn10: "1250178630",
                primary_isbn13: "9781250178634",
                publisher: "Flatiron",
                description: "A young woman’s life is changed when an en"
            },
        ],
        corrections: []
    }
}

const artsFeed = `
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:nyt="http://www.nytimes.com/namespaces/rss/2.0" version="2.0">
  <channel>
    <title>NYT &gt; Arts</title>
    <link>https://www.nytimes.com/section/arts</link>
    <atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml" rel="self" type="application/rss+xml"></atom:link>
    <description></description>
    <language>en-us</language>
    <copyright>Copyright 2024 The New York Times Company</copyright>
    <lastBuildDate>Wed, 17 Apr 2024 02:45:22 +0000</lastBuildDate>
    <pubDate>Wed, 17 Apr 2024 01:30:06 +0000</pubDate>
    <image>
      <title>NYT &gt; Arts</title>
      <url>https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png</url>
      <link>https://www.nytimes.com/section/arts</link>
    </image>
    <item>
      <title>The Beatles’ ‘Let It Be’ Film Will Stream After 54 Years on Disney+</title>
      <link>https://www.nytimes.com/2024/04/16/movies/disney-beatles-let-it-be-movie.html</link>
      <guid isPermaLink="true">https://www.nytimes.com/2024/04/16/movies/disney-beatles-let-it-be-movie.html</guid>
      <atom:link href="https://www.nytimes.com/2024/04/16/movies/disney-beatles-let-it-be-movie.html" rel="standout"></atom:link>
      <description>Michael Lindsay-Hogg’s unloved — or misinterpreted? — 1970 documentary, the source for Peter Jackson’s “Get Back,” will stream on Disney+.</description>
      <dc:creator>Alex Williams</dc:creator>
      <pubDate>Tue, 16 Apr 2024 13:00:12 +0000</pubDate>
      <category domain="http://www.nytimes.com/namespaces/keywords/des">Pop and Rock Music</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/des">Documentary Films and Programs</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Harrison, George</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Jackson, Peter</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lennon, John</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">McCartney, Paul</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Starr, Ringo</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Let It Be (Movie)</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Get Back (Movie)</category>
      <category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">Let It Be (Album)</category>
    </item>
  </channel>
</rss>
`

export const handlers = [
    http.get('https://api.nytimes.com/svc/topstories/v2/science.json', ({ request }) => {
        const url = new URL(request.url)

        const apiKey = url.searchParams.get('api-key')

        if (!apiKey) {
            return new HttpResponse(null, { status: 400 })
        }

        return HttpResponse.json(articles, { status: 200 })
    }),

    http.get('https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml', ({ }) => {
        return HttpResponse.xml(artsFeed, { status: 200 })
    }),

    http.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json', ({ request }) => {
        const url = new URL(request.url)

        const apiKey = url.searchParams.get('api-key')

        if (!apiKey) {
            return new HttpResponse(null, { status: 400 })
        }

        return HttpResponse.json(books, { status: 200 })
    })
];
