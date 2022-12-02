import React from "react";
import SliderSlick from "react-slick";
import * as S from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderType {
    children?: React.ReactNode;
}

export const Slider = ({ children }: SliderType) => {
    return (
        <S.Wrapper>
            <SliderSlick
                pauseOnHover={true}
                infinite={false}
                centerMode={true}
                speed={500}
                slidesToScroll={1}
                slidesToShow={1}
                dots={true}
                arrows={false}
            >
                {children}
            </SliderSlick>
        </S.Wrapper>
    );
};
