import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Footer } from "./index";

describe("<Footer/>", () => {
    it("should render the Footer component", () => {
        customRender(<Footer />);
        const footer = screen.getByText(/Created with Next.js/i);
        expect(footer).toBeInTheDocument();
    });
});