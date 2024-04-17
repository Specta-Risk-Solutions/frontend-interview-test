import { render, screen } from "@testing-library/react";
import Home from "@local/components/home";
import { MemoryRouter as Router } from "react-router-dom";

describe("Home", () => {
    it("renders properly", async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        const heading = await screen.findByText("NYTimes Best Sellers - Hardcover Fiction");
        expect(heading).toBeInTheDocument();
    });
});
