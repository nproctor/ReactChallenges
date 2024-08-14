import { act } from 'react';
import { render, screen } from '@testing-library/react';
import SubmitFormData from './SubmitFormData';
import userEvent from '@testing-library/user-event';

describe('SubmitFormData Component', () => {

    it("shall log data to the screen when submitted", () => {
        render(<SubmitFormData/>);
        const [email, name] = screen.getAllByRole("textbox");
        const age = screen.getByRole("spinbutton");
        const button = screen.getByRole("button");
        userEvent.type(email, "test@email.com");
        userEvent.type(name, "Bob");
        userEvent.type(age, "32");
        userEvent.click(button);
        const elements = screen.getAllByRole("listitem");
        expect(elements.length).toBe(3);
    });

    it("shall log correct data to the screen when submitted", () => {
        render(<SubmitFormData/>);
        const [email, name] = screen.getAllByRole("textbox");
        const age = screen.getByRole("spinbutton");
        const button = screen.getByRole("button");
        userEvent.type(email, "test@email.com");
        userEvent.type(name, "Bob");
        userEvent.type(age, "32");
        userEvent.click(button);
        const elements = screen.getAllByRole("listitem");
        expect(elements[0].textContent).toBe("E-mail: test@email.com");
        expect(elements[1].textContent).toBe("Name: Bob");
        expect(elements[2].textContent).toBe("Age: 32");
    });

    it("shall clear form data after submitted", () => {
        render(<SubmitFormData/>);
        const [email, name] = screen.getAllByRole("textbox");
        const age = screen.getByRole("spinbutton");
        const button = screen.getByRole("button");
        userEvent.type(email, "test@email.com");
        userEvent.type(name, "Bob");
        userEvent.type(age, "32");
        userEvent.click(button);
        expect(email.textContent).toBe("");
        expect(name.textContent).toBe("");
        expect(age.textContent).toBe("");
    });
});
