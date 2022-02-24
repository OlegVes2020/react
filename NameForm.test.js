import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { NameForm }  from "./NameForm";

describe("NameForm", () => {
    const nameForm = new NameForm();

    test("defines addItem()", () => {
        expect(typeof nameForm.addItem).toBeInstanceOf("function");
    });

    test("defines handleChange()", () => {
        expect(typeof nameForm.handleChange).toBeInstanceOf("function");
    });
});