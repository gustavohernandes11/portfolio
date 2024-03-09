import { Github } from "@styled-icons/simple-icons";
import Image from "next/image";
import styled from "styled-components";
import { ProjectType } from "../../types/ProjectType";
import { TagType } from "../../types/TagType";
import { Button } from "./Button";
import { Chip } from "./Chip";

export const ProjectCard = ({
    title,
    githubUrl,
    deployUrl,
    description,
    image,
    tags,
}: ProjectType) => {
    return (
        <Container>
            <Header title={title} description={description} />
            <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
            />
            <Footer githubUrl={githubUrl} deployUrl={deployUrl} tags={tags} />
        </Container>
    );
};

interface HeaderType {
    title: string;
    description: string;
}

export const Header = ({ title, description }: HeaderType) => {
    return (
        <HeaderContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
        </HeaderContainer>
    );
};

interface FooterType {
    githubUrl?: string;
    deployUrl?: string;
    tags?: TagType[];
}

export const Footer = ({ githubUrl, deployUrl, tags }: FooterType) => {
    return (
        <FooterContainer>
            <TagsContainer>
                {tags?.map((tag) => (
                    <Chip key={tag.name} text={tag.name} />
                ))}
            </TagsContainer>
            <HStack>
                <StyledGithubButton target="_blank" href={githubUrl}>
                    <Github color="white" size="25" />
                </StyledGithubButton>
                <Button
                    target="_blank"
                    href={deployUrl}
                    as="a"
                    variant="purple-rounded"
                >
                    Ver online →
                </Button>
            </HStack>
        </FooterContainer>
    );
};

const Container = styled.div`
    max-width: 50%;
    display: grid;
    border-radius: 32px;
    background-color: #ffffff37;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.58);
    overflow: hidden;

    img {
        object-fit: contain;
        max-height: 60vh;
        height: auto;
        width: 100%;
        padding: 1rem;
    }

    @media (max-width: 768px) {
        gap: 0rem;
        margin-inline: 0rem;
        grid-template-columns: 1fr;
        padding-block: 2.5rem;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    background: rgba(0, 0, 0, 1);
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    padding: 2rem;
    background: rgba(0, 0, 0, 1);
`;

const ProjectTitle = styled.h3`
    font-size: 2.5rem;
    color: white;
    margin: 0;
`;

const ProjectDescription = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
`;

const TagsContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const StyledGithubButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const HStack = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;
