import { Github } from "@styled-icons/simple-icons";
import { Button } from "../Button";
import { Chip } from "../Chip";
import styled from "styled-components";
import { TagType } from "../../../types/TagType";
import { Mixins } from "styles/Mixins";

export interface FooterType {
    githubUrl?: string;
    deployUrl?: string;
    tags?: TagType[];
}

export const ProjectFooter = ({ githubUrl, deployUrl, tags }: FooterType) => {
    return (
        <FooterContainer>
            <TagsContainer>
                {tags &&
                    tags?.map((tag) => <Chip key={tag.name} text={tag.name} />)}
            </TagsContainer>
            <HStack>
                {githubUrl && (
                    <StyledGithubButton target="_blank" href={githubUrl}>
                        <Github color="white" size="25" />
                    </StyledGithubButton>
                )}
                {deployUrl && (
                    <Button
                        target="_blank"
                        href={deployUrl}
                        as="a"
                        variant="purple-rounded"
                    >
                        Ver online →
                    </Button>
                )}
            </HStack>
        </FooterContainer>
    );
};
const FooterContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    background: rgba(0, 0, 0, 1);

    @media (max-width: 768px) {
        gap: 1rem;
        flex-wrap: wrap-reverse;
        justify-content: end;
    }
`;

const TagsContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const StyledGithubButton = styled.a`
    ${Mixins.flexCenter()}
    padding: 0.5rem;
`;

const HStack = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;
