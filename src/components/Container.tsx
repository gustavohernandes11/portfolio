import styled from "styled-components";

type IContainer = {
    children: React.ReactNode;
    styles?: React.CSSProperties;
};

export const Container = ({ children, styles }: IContainer) => {
    return <StyledContainer style={styles}>{children}</StyledContainer>;
};

const StyledContainer = styled.section`
    margin: 5rem;
    min-height: 100vh;
`;
