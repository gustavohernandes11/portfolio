import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { Chip } from "./index";

describe("<Chip/>", () => {
    it("should render the Chip component", () => {
        customRender(<Chip>Texto para teste</Chip>);
    });
});