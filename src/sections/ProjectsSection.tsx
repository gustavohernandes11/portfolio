import annotareIMG from "../assets/imgs/projects/annotare.png";
import blogIMG from "../assets/imgs/projects/blog.png";
import landingPageIMG from "../assets/imgs/projects/landing-page-exemple.png";
import crudvueIMG from "../assets/imgs/projects/crud-vue.png";
import memorygameIMG from "../assets/imgs/projects/memory-game.png";
import notepadIMG from "../assets/imgs/projects/notepad.png";
import qrcodeIMG from "../assets/imgs/projects/qr-code-generator.png";
import githubapiIMG from "../assets/imgs/projects/github-api.jpeg";

import { Container, SimpleGrid } from "@chakra-ui/react";
import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import { ProjectCard } from "components/ProjectCard";

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
    Vuedotjs,
} from "@styled-icons/simple-icons";

export const ProjectsSection = () => {
    return (
        <Wrapper direction="column" paddingInline="0" id="projects">
            <Title>PROJETOS</Title>
            <Container maxW="100%" paddingInline="4rem">
                <SimpleGrid columns={[1, null, 2, 3]} spacing="1rem">
                    <ProjectCard
                        name="Annotare - Aplicativo de anotações"
                        description={`Uma página para salvar suas anotações no armazenamento do navegador. Ele utiliza conceitos importantes de controle de estado da aplicação. Você pode mudar o tema e o layout de exibição. `}
                        imageSrc={annotareIMG}
                        imageAlt="Imagem do projeto Annotare"
                        githubUrl="https://github.com/gustavohernandes11/annotare"
                        deployUrl="https://annotare.netlify.app/"
                        techSpan={
                            <>
                                <Typescript size={15} />
                                <ReactLogo size={15} />
                                <Styledcomponents size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Blog"
                        description={`Blog para compartilhar conteúdos que estou aprendendo ou que entendo como relevantes.`}
                        imageSrc={blogIMG}
                        imageAlt="Imagem do projeto Blog"
                        githubUrl="https://github.com/gustavohernandes11"
                        deployUrl="https://blog-hernandes.netlify.app/"
                        techSpan={
                            <>
                                <Typescript size={15} />
                                <Nextdotjs size={15} />
                                <Strapi size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Landing page exemple"
                        description={
                            "Site de página única para apresentação de produtos. Possui animações com Framer-Motion."
                        }
                        imageSrc={landingPageIMG}
                        imageAlt="Imagem do projeto Landing Page exemple"
                        githubUrl="https://github.com/gustavohernandes11/strapi-boilerplate-landing-page"
                        deployUrl="https://landing-page-exemple.netlify.app/"
                        techSpan={
                            <>
                                <Nextdotjs size={15} />
                                <Html5 size={15} />
                                <Css3 size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Jogo da memória"
                        description="Criado com React. É um jogo da memória com 16 cartas que contabiliza suas jogadas e sua pontuação. Acesse e jogue."
                        imageSrc={memorygameIMG}
                        imageAlt="Imagem do projeto jogo da memória"
                        githubUrl="https://github.com/gustavohernandes11/memory-game"
                        deployUrl="https://gh-memory-game.netlify.app/"
                        techSpan={
                            <>
                                <ReactLogo size={15} />
                                <Html5 size={15} />
                                <Css3 size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Gerador de QR code"
                        description="Você insere qualquer valor no campo de texto e após alguns segundos é produzido um QR code de acordo com a sua mensagem."
                        imageSrc={qrcodeIMG}
                        imageAlt="Imagem do projeto QR-code-generator"
                        githubUrl="https://github.com/gustavohernandes11/qrcode-generator"
                        deployUrl="https://appgeradordeqrcode.netlify.app"
                        techSpan={
                            <>
                                <ReactLogo size={15} />
                                <Html5 size={15} />
                                <Css3 size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Buscador de perfil do Github"
                        description="Insira um nome de usuário do github no campo de texto e será retornado algumas informações do perfil e seus repositórios."
                        imageSrc={githubapiIMG}
                        imageAlt="Imagem da tela inicial do projeto buscador de perfil do Github"
                        githubUrl="https://github.com/gustavohernandes11/search-github-profiles"
                        deployUrl="https://searchprofilesgithub-v2.netlify.app/"
                        techSpan={
                            <>
                                <ReactLogo size={15} />
                                <Git size={15} />
                                <Styledcomponents size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="Bloco de anotações com autenticação de usuários"
                        description="Possui tela de login e registro para usuários, tela de administrador e uma interface inicial parecida com a do Annotare."
                        imageSrc={notepadIMG}
                        imageAlt="Tela inicial do projeto bloco de anotações"
                        githubUrl="https://github.com/gustavohernandes11/notepad"
                        techSpan={
                            <>
                                <ReactLogo size={15} />
                                <Postgresql size={15} />
                                <Nodedotjs size={15} />
                            </>
                        }
                    />
                    <ProjectCard
                        name="App de cadastro de usuários"
                        description={`Projeto criado com Vue. Registra as informações da interface em um banco de dados PostgreSQL (com Knex).`}
                        imageSrc={crudvueIMG}
                        imageAlt="Imagem do projeto cadastro de usuários"
                        githubUrl="https://github.com/gustavohernandes11/user-control-app"
                        techSpan={
                            <>
                                <Vuedotjs size={15} />
                                <Postgresql size={15} />
                                <Nodedotjs size={15} />
                            </>
                        }
                    />
                </SimpleGrid>
            </Container>
        </Wrapper>
    );
};
