import * as Styled from "./styles";
import { Code } from '@styled-icons/entypo'

interface ChipInterface {
    label: string | number;
    color?: string;
    icon?: JSX.Element;
}

export const Chip = ({ label, color, icon }: ChipInterface) => {
    return <Styled.Container color={color}>{icon ? icon : <Code size="15"/>}{label}</Styled.Container>;
};



export const ChipWrapper = ({ children }: any) => {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
