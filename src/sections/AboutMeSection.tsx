import { Container, Image, Text } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";

export const AboutMeSection = () => {
    return (
        <Wrapper direction="column" paddingInline="0" id="about">
            <Title>SOBRE</Title>
            <Container maxW="46rem">
                <Image
                    src="https://images.unsplash.com/photo-1669461734596-b126134d0dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    width="100%"
                    mb="2rem"
                    marginInline="auto"
                    borderRadius="6px"
                />
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem rem voluptas, consequatur illum consequuntur, nisi
                    sapiente nemo nam ducimus distinctio dicta tempore, ex quos
                    dolor adipisci possimus quasi. Non, harum!
                </Text>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem rem voluptas, consequatur illum consequuntur, nisi
                    sapiente nemo nam ducimus distinctio dicta tempore, ex quos
                    dolor adipisci possimus quasi. Non, harum!
                </Text>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem rem voluptas, consequatur illum consequuntur, nisi
                    sapiente nemo nam ducimus distinctio dicta tempore, ex quos
                    dolor adipisci possimus quasi. Non, harum!
                </Text>
            </Container>
        </Wrapper>
    );
};
