import React from "react";
import SliderSlick from "react-slick";
import * as S from "./styles";

interface SliderType {
    children?: React.ReactNode;
}

export const Slider = ({ children }: SliderType) => {
    return (
        <S.Wrapper>
            <SliderSlick
                dots={true}
                pauseOnHover={true}
                infinite={false}
                centerMode={true}
                speed={500}
                slidesToScroll={1}
                slidesToShow={1}
                vertical={true}
            >
                {children}
            </SliderSlick>
        </S.Wrapper>
    );
};
