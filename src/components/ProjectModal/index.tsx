import { Modal } from "../Modal";
import { Heading } from "../Heading";

import { Typography, Stack, Button, Grid, Container } from "@mui/material";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectModalType {
    projectName: string;
    deployUrl?: string;
    description: string;
    githubUrl?: string;
    imageSrc: string | StaticImageData;
    imageAlt: string;
    placeholder?: "blur" | "empty";
}

export const ProjectModal = ({
    projectName,
    deployUrl,
    description,
    githubUrl,
    imageSrc,
    imageAlt,
    placeholder = 'blur',
}: ProjectModalType): JSX.Element => {
    return (
        <Grid
            xs={12}
            sm={6}
            md={4}
            item
            justifyContent="center"
            alignItems="center"
        >
            <Modal
                alignItems="baseline"
                justifyContent="baseline"
                className="scale-in-center"
            >
                <Container disableGutters={true}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={200}
                        layout="intrinsic"
                        placeholder={placeholder}
                    />
                </Container>
                <Heading as="h3">{projectName}</Heading>
                <Typography mt={2} mb={2}>
                    {description}
                </Typography>
                <Stack direction="row" mt="auto" spacing={1} alignSelf="end">
                    {githubUrl && (
                        <Link href={githubUrl} passHref>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button variant="text">Github</Button>
                            </a>
                        </Link>
                    )}
                    {deployUrl && (
                        <Link href={deployUrl} passHref>
                            <a
                                href={deployUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button variant="contained">Deploy</Button>
                            </a>
                        </Link>
                    )}
                </Stack>
            </Modal>
        </Grid>
    );
};
