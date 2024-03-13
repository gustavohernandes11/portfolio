import styled, { css } from "styled-components";
import { Mixins } from "styles/Mixins";

interface SectionContainerProps {
    children: React.ReactNode;
    dottedBackground?: boolean;
    center?: boolean;
    id?: string;
}

export const SectionContainer = ({
    children,
    dottedBackground = false,
    id,
    center,
}: SectionContainerProps) => {
    return (
        <Container dottedBackground={dottedBackground} center={center} id={id}>
            {children}
        </Container>
    );
};

const Container = styled.section<SectionContainerProps>`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    ${({ dottedBackground }) =>
        dottedBackground &&
        css`
            --dot-bg: white;
            --dot-color: #b1b1b1;
            --dot-size: 2px;
            --dot-space: 22px;

            background: linear-gradient(
                        90deg,
                        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                        transparent 1%
                    )
                    center / var(--dot-space) var(--dot-space),
                linear-gradient(
                        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                        transparent 1%
                    )
                    center / var(--dot-space) var(--dot-space),
                var(--dot-color);

            background-attachment: fixed;
        `}
    ${({ center }) => center && Mixins.flexCenter()}
`;
