import { Heading } from "components/Heading";
import { Nav } from "components/Nav";
import * as Styled from "./styles.js";

// interface HeaderType {
//     children: React.ReactNode;
// }

export const Header = () => {
    return (
        <Styled.Container>
            <Heading >Lorem</Heading>
            <Nav />
        </Styled.Container>
    );
};
