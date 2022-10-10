import styled, { css } from "styled-components";



export const Container = styled.div`
    ${({ theme }: any) => css`
        background: ${theme.colors.surfaceGradient};
        border-radius: 50%;
        border: 5px solid ${theme.colors.text};

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: all 300ms ease-in-out;

        width: 250px;
        height: 250px;
        
        img {
            border-radius: 50%;
        }
        :hover {
            transform: scale(1.02);
        }
    `}
`;
