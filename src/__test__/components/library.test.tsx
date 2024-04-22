import { act, fireEvent, render, screen } from "@testing-library/react";
import Library from "@local/components/library";
import { MemoryRouter as Router } from "react-router-dom";

describe("Library", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("renders properly", () => {
        render(
            <Router>
                <Library />
            </Router>
        );

        const heading = screen.getByText("My Library");
        expect(heading).toBeInTheDocument();
    });

    it("does not show the form initially", () => {
        const { queryByText } = render(
            <Router>
                <Library />
            </Router>
        );

        const formHeading = queryByText("Add Book");
        expect(formHeading).not.toBeInTheDocument();
    });

    it("shows the form when \"Add New Book\" button is clicked", () => {
        render(
            <Router>
                <Library />
            </Router>
        );

        const addButton = screen.getByText("Add New Book");
        fireEvent.click(addButton);

        const saveButton = screen.getByText("Add Book");
        expect(saveButton).toBeInTheDocument();

        // check if text inputs are rendered
        const bookNameInput = screen.getByPlaceholderText("Book Name");
        expect(bookNameInput).toBeInTheDocument();

        // check if likes input is rendered
        const likesInput = screen.getByPlaceholderText("no of Likes");
        expect(likesInput).toBeInTheDocument();

        // check if date input is rendered
        const dateInput = screen.getByLabelText("date")
        expect(dateInput).toBeInTheDocument();

        // check if percentageRead input is rendered
        const percentageReadInput = screen.getByPlaceholderText("Percentage Read");
        expect(percentageReadInput).toBeInTheDocument();


        // type to each input
        act(() => {
            fireEvent.change(bookNameInput, { target: { value: "Book Name" } });
        });
        act(() => {
            fireEvent.change(likesInput, { target: { value: 10 } });
        });
        act(() => {
            fireEvent.change(dateInput, { target: { value: "2021-09-01" } });
        });
        act(() => {
            fireEvent.change(percentageReadInput, { target: { value: 50 } });
        });

        expect(bookNameInput).toHaveValue("Book Name");
        expect(likesInput).toHaveValue(10);
        expect(dateInput).toHaveValue("2021-09-01");
        expect(percentageReadInput).toHaveValue(50);

        fireEvent.click(saveButton);

        expect(saveButton).not.toBeInTheDocument();

        const savedBook = JSON.parse(localStorage.getItem("books") || "[]");
        expect(savedBook).toEqual([
            {
                name: "Book Name",
                likes: "10",
                dateSaved: "2021-09-01",
                percentageRead: "50",
            }
        ]);
    });

    it("deletes a book when the delete button is clicked", () => {
        // Assuming there's a book in the list
        const books = [
            {
                name: "Book Name",
                likes: 10,
                dateSaved: "2021-09-01",
                percentageRead: 50,
            },
        ];
        localStorage.setItem("books", JSON.stringify(books));

        render(<Library />);

        // Find the delete button and click it
        const deleteButton = screen.getByTestId("Delete book");
        fireEvent.click(deleteButton);

        // Check if local storage is empty
        const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
        expect(savedBooks).toEqual([]);
    });
});
