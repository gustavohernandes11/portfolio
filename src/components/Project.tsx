import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./Button";
import { Chip } from "./Chip";

export type Image = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};
export type Tag = {
    name: string;
};
export type ProjectType = {
    title: string;
    description: string;
    deployUrl?: string;
    githubUrl?: string;
    image: Image;
    tags: Tag[];
};

export const Project = ({
    title,
    githubUrl,
    deployUrl,
    description,
    image,
    tags,
}: ProjectType) => {
    return (
        <Container>
            <Column>
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                />
            </Column>
            <Column>
                <Body>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ChipContainer>
                        {tags?.map((tag) => (
                            <Chip key={tag.name} text={tag.name} />
                        ))}
                    </ChipContainer>
                </Body>
                <Footer>
                    {githubUrl && (
                        <Button
                            as="a"
                            href={githubUrl}
                            variant="light"
                            target="_blank"
                        >
                            Github
                        </Button>
                    )}
                    {deployUrl && (
                        <Button as="a" href={deployUrl} target="_blank">
                            Conferir
                        </Button>
                    )}
                </Footer>
            </Column>
        </Container>
    );
};
const Container = styled.div`
    max-width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 3fr 2fr;
    margin-inline: 10rem;
    padding-block: 5rem;

    @media (max-width: 768px) {
        gap: 0rem;
        margin-inline: 0rem;
        grid-template-columns: 1fr;
        padding-block: 2.5rem;
    }
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    img {
        object-fit: scale-down;
        max-height: 60vh;
        height: auto;
        width: 100%;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;
const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
const Body = styled.div`
    padding: 1rem;
    margin-bottom: auto;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;
const Footer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;
