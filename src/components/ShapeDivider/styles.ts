import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;

    .section-shape-divider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .section-shape-divider svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 35px;
        transform: rotateY(180deg);
    }

    .section-shape-divider .shape-fill {
        fill: ${({ color = "#252525" }: any) => color};
    }

    @media (max-width: 425px) {
        .section-shape-divider svg {
            height: 20px;
        }
    }
`;
