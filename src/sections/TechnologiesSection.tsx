import { Box, Container, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import {
    Typescript,
    Html5,
    Css3,
    Strapi,
    ReactLogo,
    Styledcomponents,
    Nextdotjs,
    Postgresql,
    Git,
    Nodedotjs,
    Chakraui,
    Bootstrap,
} from "@styled-icons/simple-icons";

export const TechnologiesSection = () => {
    return (
        <>
            <Wrapper flexDirection="column" paddingInline={0} id="tech">
                <Title>TECNOLOGIAS</Title>
                <Container maxW="46rem">
                    <SimpleGrid columns={3} maxW="46rem" spacing="1rem">
                        <TechItem icon={<Typescript size={40} />}>
                            Typescript
                        </TechItem>
                        <TechItem icon={<Html5 size={40} />}>Html5</TechItem>
                        <TechItem icon={<Css3 size={40} />}>CSS</TechItem>
                        <TechItem icon={<Strapi size={40} />}>Strapi</TechItem>
                        <TechItem icon={<Nextdotjs size={40} />}>Next</TechItem>
                        <TechItem icon={<Chakraui size={40} />}>
                            Chakra UI
                        </TechItem>
                        <TechItem icon={<Bootstrap size={40} />}>
                            Bootstrap
                        </TechItem>
                        <TechItem icon={<ReactLogo size={40} />}>
                            React
                        </TechItem>
                        <TechItem
                            fontSize="0.8rem"
                            icon={<Styledcomponents size={40} />}
                        >
                            Styled-components
                        </TechItem>
                        <TechItem icon={<Postgresql size={40} />}>
                            Postgresql
                        </TechItem>
                        <TechItem icon={<Git size={40} />}>Git</TechItem>
                        <TechItem icon={<Nodedotjs size={40} />}>Node</TechItem>
                    </SimpleGrid>
                </Container>
            </Wrapper>
        </>
    );
};

export const TechItem = ({ icon, children, ...props }: any) => {
    return (
        <Box
            padding="1.5rem"
            bgColor="custom.mediumGrey"
            borderRadius="6"
            align="center"
            transition="color 0.5s"
            _hover={{
                cursor: "pointer",
                color: "custom.blue",
                bgColor: "grey.100",
            }}
        >
            <Box>{icon}</Box>
            <Heading fontSize="1rem" mt="1rem" as="h2" {...props}>
                {children}
            </Heading>
        </Box>
    );
};
