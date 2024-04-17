import { render, screen } from "@testing-library/react";
import ArtFeeds from "@local/components/ArtsFeed";
import { MemoryRouter as Router } from "react-router-dom";

describe("Art Feed", () => {
    it("renders properly", async () => {
        render(
            <Router>
                <ArtFeeds />
            </Router>
        );

        const heading = await screen.findByText("NY Times Arts Feed");
        expect(heading).toBeInTheDocument();
    });
});
