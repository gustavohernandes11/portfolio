import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { AvatarImage } from "./index";

describe("<AvatarImage/>", () => {
    it("should render the AvatarImage component", () => {
        customRender(<AvatarImage src="error.png" alt="Alt Text to test" />);
        const avatarimage = screen.getByAltText(/Alt Text to test/i);
        expect(avatarimage).toBeInTheDocument();
    });
});