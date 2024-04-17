import { render, screen } from "@testing-library/react";
import Article from "@local/components/Articles";
import { MemoryRouter as Router } from "react-router-dom";

describe("Art Feed", () => {
    it("renders properly", async () => {
        render(
            <Router>
                <Article />
            </Router>
        );

        const heading = await screen.findByText("NY Times Top Science Stories");
        expect(heading).toBeInTheDocument();
    });
});
