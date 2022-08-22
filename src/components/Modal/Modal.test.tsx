import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Modal } from "./index";

describe("<Modal />", () => {
    it("should render the Modal component", () => {
        const { container } = customRender(<Modal>children text</Modal>);
        const modal = container.querySelector("div");
        expect(modal).toBeInTheDocument();
    });
});
