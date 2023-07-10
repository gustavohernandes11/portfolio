import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./Button";

export type Image = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};

export type ProjectType = {
    title: string;
    description: string;
    deployUrl?: string;
    githubUrl?: string;
    image: Image;
};

export const Card = ({
    title,
    githubUrl,
    deployUrl,
    description,
    image,
}: ProjectType) => {
    return (
        <Container>
            <Header>
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                />
            </Header>
            <Body>
                <h3>{title}</h3>
                <p>{description}</p>
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
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 0px 10px #02020222;
    border-radius: 0.25rem;
`;
const Header = styled.header`
    max-height: 14rem;
    height: 50%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 0.25rem 0.25rem 0 0;
    }
`;
const Body = styled.div`
    padding: 1rem;
    flex-grow: 1;
`;
const Footer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;
