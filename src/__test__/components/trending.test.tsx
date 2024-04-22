import { render, screen } from "@testing-library/react";
import Trending from "@local/components/trending";
import { MemoryRouter as Router } from "react-router-dom";

describe("Trending", () => {
    it("renders properly", () => {
        render(<Router>
            <Trending isOpen={true} toggle={() => { }} />
        </Router>
        );
        const homeLink = screen.getByText("Trending News");
        expect(homeLink).toBeInTheDocument();
    });
});
