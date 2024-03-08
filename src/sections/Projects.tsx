import { Project } from "components/Project";
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
            <Project
                key={proj.title}
                title={proj.title}
                description={proj.description}
                deployUrl={proj?.deployUrl}
                githubUrl={proj?.githubUrl}
                image={proj.image}
                tags={proj.tags}
            />
        ))}
    </SectionContainer>
);
