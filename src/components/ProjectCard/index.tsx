import { useIntersection } from "hooks/useIntersection";
import Image from "next/image";
import styled from "styled-components";
import { ProjectType } from "../../../types/ProjectType";
import { ProjectFooter } from "./ProjectFooter";
import { ProjectHeader } from "./ProjectHeader";

export const ProjectCard = ({
    title,
    githubUrl,
    deployUrl,
    description,
    image,
    tags,
}: ProjectType) => {
    const { isIntersecting, ref } = useIntersection({ recurrence: "always" });

    return (
        <Container ref={ref} isIntersecting={isIntersecting}>
            <ProjectHeader title={title} description={description} />
            <Image
                className="projectCover"
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
            />
            <ProjectFooter
                githubUrl={githubUrl}
                deployUrl={deployUrl}
                tags={tags}
            />
        </Container>
    );
};

const Container = styled.div<{ isIntersecting: boolean }>`
    max-width: 75vw;
    background-color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.58);
    transform: ${({ isIntersecting }) =>
        isIntersecting ? "scale(1)" : "scale(0.75)"};
    transition: transform 250ms ease-in-out;
    border-radius: 1rem;
    overflow: hidden;

    .projectCover {
        object-fit: contain;
        height: auto;
        max-height: 500px;
        width: 100%;
        padding: 1rem;
    }

    :hover {
        cursor: grab;
    }
    :active {
        cursor: grabbing;
    }

    @media (max-width: 768px) {
        gap: 0rem;
        margin-inline: 0rem;
        max-width: 100vw;
        transform: ${({ isIntersecting }) =>
            isIntersecting ? "scale(1)" : "scale(0.90)"};

        .projectCover {
            max-height: 400px;
        }
    }
`;
