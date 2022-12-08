import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;

    .footer-shape-divider {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .footer-shape-divider svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 35px;
    }

    .footer-shape-divider .shape-fill {
        fill: #222222;
    }

    @media (max-width: 425px) {
        .footer-shape-divider svg {
            height: 20px;
        }
    }
`;
