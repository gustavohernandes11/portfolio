import React from "react";
import Image from "next/image";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Footer";
import { AvatarImage } from "../src/components/AvatarImage";
import { ProjectModal } from "../src/components/ProjectModal";
import { Modal } from "../src/components/Modal";
import { Section } from "../src/components/Section";
import { SocialBar } from "../src/components/SocialBar";
import { Header } from "../src/components/Header";

import { Grid, Chip, Typography } from "@mui/material";

import IllustrationImage from "../src/assets/imgs/Hot beverage.png";
import annotareIMG from "../src/assets/imgs/projects/annotareFullscreen.png";
import calculadoraIMG from "../src/assets/imgs/projects/calculadora.png";
import crudvueIMG from "../src/assets/imgs/projects/CRUDvue1.png";
import memorygameIMG from "../src/assets/imgs/projects/memoryGameImage.png";
import notepadIMG from "../src/assets/imgs/projects/notepadHome.png";
import qrcodeIMG from "../src/assets/imgs/projects/QRcodeImage.png";
import githubapiIMG from "../src/assets/imgs/projects/search-github-profiles.png";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <h1>Header</h1>
            {/* <Header />
            <Section alignItems="center" id="first-section">
                <Modal>
                    <AvatarImage
                        src="https://github.com/gustavohernandes11.png"
                        alt="Foto de perfil do autor"
                    />
                    <Heading>Gustavo Hernandes</Heading>
                    <Typography mt={1} mb={1}>
                        Estudante de desenvolvimento web e engenharia.
                    </Typography>
                    <SocialBar />
                </Modal>
            </Section>
            <Section id="about-me-section" alignItems="center" color="#202020">
                <Heading as="h2">Sobre</Heading>
                <Grid
                    xs={12}
                    container
                    mt={1}
                    justifyContent="center"
                    spacing={4}
                >
                    <Grid xs={12} sm={5} item justifyContent="center">
                        <Image
                            src={IllustrationImage}
                            alt="Illustration image"
                            width={866}
                            height={683}
                            layout="responsive"
                        />
                    </Grid>
                    <Grid xs={12} sm={7} item justifyContent="center">
                        <Heading as="h3">Quem sou</Heading>
                        <Typography paragraph>
                            Meu nome é <strong>Gustavo Hernandes</strong>, sou
                            do interior de São Paulo, tenho 19 anos e atualmente
                            estou cursando
                            <b> Engenharia de Produção</b> e paralelamente
                            estudo
                            <strong> Desenvolvimento Web</strong>.
                        </Typography>
                        <Typography paragraph>
                            Meu foco sempre foi a Stack{" "}
                            <strong>Frontend</strong>, porém busco aprender
                            linguagens backend como complemento para entender
                            conceitos importantes na produção de um software.
                        </Typography>
                        <Heading as="h3">Tecnologias</Heading>
                        <Grid direction="row">
                            <Chip
                                color="secondary"
                                label="Typescript/Javascript"
                                variant="outlined"
                            />
                            <Chip
                                color="secondary"
                                label="Html"
                                variant="outlined"
                            />
                            <Chip
                                color="secondary"
                                label="Css"
                                variant="outlined"
                            />
                            <Chip
                                color="secondary"
                                label="React"
                                variant="outlined"
                            />

                            <Chip
                                color="primary"
                                label="Node"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="Vue"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="Next.js"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="Styled-components"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="Material Ui"
                                variant="outlined"
                            />

                            <Chip
                                color="primary"
                                label="Strapi"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="PostgreSQL"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label="Git/Github"
                                variant="outlined"
                            />
                        </Grid>
                        <Heading as="h3">Aprendendo no momento</Heading>

                        <Grid spacing={1} direction="row">
                            <Chip
                                color="primary"
                                label="C#"
                                variant="outlined"
                            />
                            <Chip
                                color="primary"
                                label=".Net"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section id="projects-section" alignItems="center" color="#141414">
                <Heading as="h2">Projetos</Heading>
                <Grid xs={12} container mt={1} spacing={4}>
                    <ProjectModal
                        projectName="Annotare - Aplicativo de anotações"
                        description={`Uma página para salvar suas anotações no armazenamento do navegador. Ele utiliza conceitos importantes de controle de estado da aplicação. Você pode mudar o tema e o layout de exibição. `}
                        imageSrc={annotareIMG}
                        imageAlt="Imagem do projeto Annotare"
                        githubUrl="https://github.com/gustavohernandes11/annotare"
                        deployUrl="https://annotare.netlify.app/"
                    />
                    <ProjectModal
                        projectName="Jogo da memória"
                        description="Criado com React. É um jogo da memória com 16 cartas que contabiliza suas jogadas e quantos pares já foram encontrados. Quer jogar?"
                        imageSrc={memorygameIMG}
                        imageAlt="Imagem do projeto jogo da memória"
                        githubUrl="https://github.com/gustavohernandes11/memory-game"
                        deployUrl="https://gh-memory-game.netlify.app/"
                    />
                    <ProjectModal
                        projectName="Gerador de QR code"
                        description="Você insere qualquer valor no campo de texto e após alguns segundos é produzido um QR code de acordo com a sua mensagem."
                        imageSrc={qrcodeIMG}
                        imageAlt="Imagem do projeto QR-code-generator"
                        githubUrl="https://github.com/gustavohernandes11/qrcode-generator"
                        deployUrl="https://appgeradordeqrcode.netlify.app"
                    />
                    <ProjectModal
                        projectName="Buscador de perfil do Github"
                        description="Insira um nome de usuário do github no campo de texto e será retornado algumas informações do perfil e seus repositórios."
                        imageSrc={githubapiIMG}
                        imageAlt="Imagem da tela inicial do projeto buscador de perfil do Github"
                        githubUrl="https://github.com/gustavohernandes11/search-github-profiles"
                        deployUrl="https://searchprofilesgithub.netlify.app"
                    />
                    <ProjectModal
                        projectName="Calculadora"
                        description="Um dos meus primeiros projetos em React. É uma simples calculadora que faz o que uma calculadora foi feita pra fazer: contas - o que você esperava?"
                        imageSrc={calculadoraIMG}
                        imageAlt="Imagem do projeto calculadora"
                        githubUrl="https://github.com/gustavohernandes11/calculator"
                        deployUrl="https://calculadora11.netlify.app"
                    />
                    <ProjectModal
                        projectName="Bloco de anotações com autenticação de usuários"
                        description="Possui tela de login e registro para usuários, tela de administrador e uma interface inicial parecida com a do Annotare. As informações são gravadas com PostgreSQl"
                        imageSrc={notepadIMG}
                        imageAlt="Tela inicial do projeto bloco de anotações"
                        githubUrl="https://github.com/gustavohernandes11/notepad"
                    />
                    <ProjectModal
                        projectName="App de cadastro de usuários (CRUD + interface)"
                        description={`Projeto criado com Vue. Registra as informações da interface em um Banco de dados PostgreSQL (com Knex).`}
                        imageSrc={crudvueIMG}
                        imageAlt="Imagem do projeto cadastro de usuários"
                        githubUrl="https://github.com/gustavohernandes11/user-control-app"
                    />
                </Grid>
            </Section>
            <Section id="contact-me-section" alignItems="center">
                <Heading as="h2">Contato</Heading>
                <Typography>Whatsapp: 017 99656-0749</Typography>
                <Typography>Email: gustavo.hernandes.s11@gmail.com</Typography>
            </Section>
            <Footer /> */}
        </>
    );
};

export default Home;
