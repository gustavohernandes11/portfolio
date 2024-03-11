import Animate from "components/Animate";
import { ProjectCard } from "components/ProjectCard";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { useMediaQuery } from "hooks/useMediaQuery";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ProjectType } from "../../types/ProjectType";
import ArrowSVG from "../assets/Arrow.svg";

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
    const isTablet = useMediaQuery(1024);
    const isMobile = useMediaQuery(768);

    const getSlidesPerView = () => {
        if (isMobile) return 1.2;
        else if (isTablet) return 1.5;
        else return 2;
    };

    return (
        <SectionContainer dottedBackground>
            <Title id="projects">PROJETOS</Title>
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
        </SectionContainer>
    );
};

export const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <>
            <NextButton onClick={() => swiper.slideNext()} title="Next">
                <Animate type="zoomIn">
                    <ArrowRight src={ArrowSVG} alt="Próximo" />
                </Animate>
            </NextButton>

            <PrevButton onClick={() => swiper.slidePrev()} title="Prev">
                <Animate type="zoomIn">
                    <ArrowLeft src={ArrowSVG} alt="Anterior" />
                </Animate>
            </PrevButton>
        </>
    );
};

const SlideButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    z-index: 10;
    scale: 0.5;

    :hover {
        cursor: pointer;
    }
`;

const ArrowRight = styled(Image)`
    transform: rotate(-90deg);
`;
const ArrowLeft = styled(Image)`
    transform: rotate(90deg);
`;

const PrevButton = styled(SlideButton)`
    left: 3rem;

    @media (max-width: 768px) {
        left: -2rem;
    }
`;
const NextButton = styled(SlideButton)`
    right: 3rem;

    @media (max-width: 768px) {
        right: -2rem;
    }
`;
