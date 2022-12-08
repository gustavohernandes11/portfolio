import { Container, Text, Box } from "@chakra-ui/react";
import { Social } from "components/Social";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import Image from "next/image";
import { BackgroundImageSVG } from "../assets/BackgroundImageSVG";

export const AboutMeSection = () => {
    return (
        <Wrapper
            direction="column"
            paddingInline="0"
            marginTop="4rem"
            id="about"
            bgImage={BackgroundImageSVG}
        >
            <Title>SOBRE</Title>
            <Container maxW="46rem">
                <Box
                    width={460}
                    maxWidth="90%"
                    mb="2rem"
                    marginInline="auto"
                    borderRadius="16px"
                    border="2px solid"
                    borderColor="custom.blue"
                >
                    <Image
                        width={460}
                        height={460}
                        style={{ borderRadius: "16px" }}
                        alt="imagem do autor"
                        src="https://github.com/gustavohernandes11.png"
                    />
                </Box>
                <Social margin="1rem auto" />
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
