import {
    Card,
    CardBody,
    Stack,
    Heading,
    CardFooter,
    ButtonGroup,
    Button,
    Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
    name: string;
    description: string;
    githubUrl?: string;
    deployUrl?: string;
    imageAlt: string;
    imageSrc: string | StaticImageData;
    techSpan?: React.ReactNode | React.ReactNode[];
}

export const ProjectCard = ({
    name,
    githubUrl,
    deployUrl,
    imageAlt,
    imageSrc,
    techSpan,
    description,
}: ProjectCardProps) => {
    return (
        <Card maxW="100%" bgColor="custom.mediumGrey" color="custom.light">
            <CardBody padding="1rem">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    style={{
                        borderRadius: "6px",
                    }}
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>
                    <Text color="gray.200">{description}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="space-between" padding="1rem">
                <Stack
                    color="gray.200"
                    align="center"
                    spacing="1rem"
                    direction="row"
                >
                    {techSpan}
                </Stack>
                <ButtonGroup spacing="2">
                    <Button
                        as="a"
                        target="_blank"
                        href={githubUrl}
                        variant="outlined"
                        colorScheme="blue"
                        color="gray.200"
                    >
                        Github
                    </Button>
                    {deployUrl && <Button
                        as="a"
                        target="_blank"
                        href={deployUrl}
                        variant="solid"
                        colorScheme="blue"
                    >
                        Ver
                    </Button>}
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};
