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
                    width={320}
                    maxWidth="90%"
                    mb="2rem"
                    marginInline="auto"
                    borderRadius="32px"
                    border="3px solid"
                    borderColor="custom.blue"
                >
                    <Image
                        width={320}
                        height={320}
                        style={{ borderRadius: "inherit" }}
                        alt="imagem do autor"
                        src="https://github.com/gustavohernandes11.png"
                    />
                </Box>
                <Social margin="1rem auto" />
                <Text>Olá 👋,</Text>
                <Text>
                    me chamo <strong>Gustavo Hernandes da Silva</strong>, tenho
                    20 anos. Há alguns anos conheci a área da programação e me
                    interessei pelo desenvolvimento de apllicações <b>web</b>.
                    Nesse tempo desenvolvi vários projetos pessoais onde pude
                    colocar em prática muito do que tenho aprendido. Como posso
                    te ajudar?
                </Text>
            </Container>
        </Wrapper>
    );
};
