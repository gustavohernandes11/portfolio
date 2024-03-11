import { useMediaQuery } from "hooks/useMediaQuery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { ProjectType } from "../../../types/ProjectType";
import { ProjectCard } from "../ProjectCard";
import { SliderButtons } from "./SliderButtons";

type ProjectsType = {
    projects: ProjectType[];
};

export const Carousel = ({ projects }: ProjectsType) => {
    const isTablet = useMediaQuery(1024);
    const isMobile = useMediaQuery(768);

    const getSlidesPerView = () => {
        if (isMobile) return 1;
        else if (isTablet) return 1.5;
        else return 2;
    };

    return (
        <Swiper
            slidesPerView={getSlidesPerView()}
            centeredSlides={true}
            spaceBetween={10}
            style={{ maxWidth: "100%" }}
        >
            {projects.map((proj) => (
                <SwiperSlide>
                    <ProjectCard key={proj.title} {...proj} />
                </SwiperSlide>
            ))}
            <SliderButtons />
        </Swiper>
    );
};
