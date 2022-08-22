import { screen } from "@testing-library/react";
import { customRender } from "../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { ProjectModal } from "./index";

describe("<ProjectModal/>", () => {
    it("should render the ProjectModal component without buttons", () => {
        customRender(
            <ProjectModal
                projectName="projectNameText"
                description="descriptionText"
                imageAlt="altText"
                imageSrc="https://github.com/gustavohernandes11.png"
                placeholder="empty"
            />
        );
        const deployButton = screen.queryByRole("button", {
            name: /deploy/i,
        });
        const githubButton = screen.queryByRole("button", {
            name: /github/i,
        });

        expect(githubButton).not.toBeInTheDocument();
        expect(deployButton).not.toBeInTheDocument();
    });
    it("should render the ProjectModal with the buttons", () => {
        const { container } = customRender(
            <ProjectModal
                projectName="projectNameText"
                description="descriptionText"
                imageAlt="altText"
                imageSrc="https://github.com/gustavohernandes11.png"
                placeholder="empty"
                githubUrl="githubUrlText"
                deployUrl="deployUrlText"
            />
        );
        const deployButton = screen.queryByRole("button", {
            name: /deploy/i,
        });
        const githubButton = screen.queryByRole("button", {
            name: /github/i,
        });

        const projectModal = container.querySelector(
            "#sandbox > div > div > div"
        );

        expect(githubButton).toBeInTheDocument();
        expect(deployButton).toBeInTheDocument();
        expect(projectModal).toMatchSnapshot();
    });
});
