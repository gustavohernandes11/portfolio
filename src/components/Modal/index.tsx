import * as Styled from "./styles.js";
import type { SectionType } from "../Section";

interface ModalType extends SectionType {
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
