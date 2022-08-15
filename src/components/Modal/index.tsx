import * as Styled from "./styles.js";

interface ModalType {
    children: React.ReactNode;
    alignItems?: string;
    justifyContent?: string;
    className?: string;
}

export const Modal = ({
    children,
    alignItems,
    justifyContent,
    className,
}: ModalType) => {
    return (
        <Styled.Container
            justifyContent={justifyContent}
            alignItems={alignItems}
            className={className}
        >
            {children}
        </Styled.Container>
    );
};
