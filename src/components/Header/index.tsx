import { Heading } from "components/Heading";
import { Nav } from "components/Nav";
import * as Styled from "./styles.js";


export const Header = () => {
    return (
        <Styled.Container>
            <Heading >Gu!</Heading>
            <Nav />
        </Styled.Container>
    );
};
