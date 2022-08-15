import { Modal } from "../Modal";
import { Heading } from "../Heading";

import { Typography, Stack, Button, Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

interface ProjectModalType {
    projectName: string;
    deployUrl?: string;
    description: string;
    githubUrl?: string;
    imageSrc: string;
    imageAlt: string;
}

export const ProjectModal = ({
    projectName,
    deployUrl,
    description,
    githubUrl,
    imageSrc,
    imageAlt,
}: ProjectModalType): JSX.Element => {
    return (
        <Grid xs={12} sm={6} md={4} item justifyContent="center" alignItems="center">
            <Modal alignItems="baseline" className="scale-in-center">
                <Container
                    disableGutters={true}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={200}
                        layout="intrinsic"
                    />
                </Container>
                <Heading as="h3">{projectName}</Heading>
                <Typography mt={2} mb={2}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={1} alignSelf="end">
                    {githubUrl && (
                        <Link href={githubUrl}>
                            <Button variant="text">Github</Button>
                        </Link>
                    )}
                    {deployUrl && (
                        <Link href={deployUrl}>
                            <Button variant="contained">Deploy</Button>
                        </Link>
                    )}
                </Stack>
            </Modal>
        </Grid>
    );
};
