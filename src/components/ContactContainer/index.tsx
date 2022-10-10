import * as Styled from "./styles";

type ContactContainer = {
    children: any;
    color: string;
    linkTo: string;
}

export const ContactContainer = ({ children, color, linkTo }: any) => {
    return (
        <>
            {linkTo ? (
                <a href={linkTo} target="_blank">
                    <Styled.Container color={color}>
                        {children}
                    </Styled.Container>
                </a>
            ) : (
                <Styled.Container color={color}>{children}</Styled.Container>
            )}
        </>
    );
};
