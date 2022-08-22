import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Section } from "./index";

describe("<Section/>", () => {
    it("should render the elements inside the Section component", () => {
        const { container } = customRender(
            <Section>
                <h1>Title</h1>
                <p>Paragraph</p>
            </Section>
        );
        const section = container.querySelector('#sandbox > div > section');
        const title = screen.getByRole("heading", {
            name: /title/i,
        });
        const paragraphy = screen.getByText(/paragraph/i);

        expect(title).toMatchInlineSnapshot();
        expect(paragraphy).toMatchInlineSnapshot();
    });
});
