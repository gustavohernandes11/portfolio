import { ProjectCard } from "components/ProjectCard";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

export const Projects = ({ projects }: ProjectsType) => {
    return (
        <SectionContainer dottedBackground>
            <Title id="projects">PROJETOS</Title>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={50}
                style={{ maxWidth: "95vw" }}
                modules={[Navigation]}
            >
                {projects.map((proj) => (
                    <SwiperSlide>
                        <ProjectCard key={proj.title} {...proj} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionContainer>
    );
};
