import * as Styled from "./styles";

interface ChipInterface {
    label: string | number;
    color?: string;
}

export const Chip = ({ label, color }: ChipInterface) => {
    return <Styled.Container color={color}>{label}</Styled.Container>;
};
export const ChipWrapper = ({ children }: any) => {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
