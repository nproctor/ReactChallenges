import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoList from './ToDoList';

describe('ToDoList Component', () => {
    it("input shall be initially empty", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        expect(input).toHaveValue("");
    });

    it("input shall hold the value that is typed", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        userEvent.type(input, "San Diego");
        expect(input).toHaveValue("San Diego");
    });

    it("input value shall clear on submit", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        const button = screen.getByText("Submit");
        userEvent.type(input, "San Diego");
        userEvent.click(button);
        expect(input).toHaveValue("");
    });

    it("li element shall be created with value on submit", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        const button = screen.getByText("Submit");
        userEvent.type(input, "San Diego");
        userEvent.click(button);
        const li = screen.getAllByRole("listitem");
        expect(li).toHaveLength(1);
        expect(li[0].textContent).toContain("San Diego");
    });

    it("shall support multiple li submissions", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        const button = screen.getByText("Submit");
        userEvent.type(input, "San Diego");
        userEvent.click(button);
        userEvent.type(input, "Antonio");
        userEvent.click(button);
        userEvent.type(input, "Las Vegas");
        userEvent.click(button);
        userEvent.type(input, "Houston");
        userEvent.click(button);
        const li = screen.getAllByRole("listitem");
        expect(li).toHaveLength(4);
        expect(li[0].textContent).toContain("San Diego");
        expect(li[1].textContent).toContain("Antonio");
        expect(li[2].textContent).toContain("Las Vegas");
        expect(li[3].textContent).toContain("Houston");
    });

    it("shall remove elements when X is clicked", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        const button = screen.getByText("Submit");
        userEvent.type(input, "San Diego");
        userEvent.click(button);
        userEvent.type(input, "Antonio");
        userEvent.click(button);
        userEvent.type(input, "Las Vegas");
        userEvent.click(button);
        userEvent.type(input, "Houston");
        userEvent.click(button);
        const sanDiegoX = screen.getByText("San Diego").children[0];
        userEvent.click(sanDiegoX);
        const li = screen.getAllByRole("listitem");
        expect(li).toHaveLength(3);
        expect(li[0].textContent).toContain("Antonio");
        expect(li[1].textContent).toContain("Las Vegas");
        expect(li[2].textContent).toContain("Houston");
    });

    it("shall remove elements when X is clicked", () => {
        render(<ToDoList/>);
        const input = screen.getByPlaceholderText("Enter City");
        const button = screen.getByText("Submit");
        userEvent.type(input, "San Diego");
        userEvent.click(button);
        userEvent.type(input, "Antonio");
        userEvent.click(button);
        userEvent.type(input, "Las Vegas");
        userEvent.click(button);
        userEvent.type(input, "Houston");
        userEvent.click(button);
        const lasVegasX = screen.getByText("Las Vegas").children[0];
        userEvent.click(lasVegasX);
        const li = screen.getAllByRole("listitem");
        expect(li).toHaveLength(3);
        expect(li[0].textContent).toContain("San Diego");
        expect(li[1].textContent).toContain("Antonio");
        expect(li[2].textContent).toContain("Houston");
    });

});
