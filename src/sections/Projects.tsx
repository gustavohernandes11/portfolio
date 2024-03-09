import { ProjectCard } from "components/ProjectCard";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { StaticImageData } from "next/image";
import { ProjectType } from "../../types/ProjectType";

export type Image = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};

type ProjectsType = {
    projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsType) => (
    <SectionContainer dottedBackground>
        <Title id="projects">PROJETOS</Title>
        {projects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
        ))}
    </SectionContainer>
);
