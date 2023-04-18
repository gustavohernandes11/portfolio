import annotareIMG from "../assets/imgs/projects/annotare.png";
import blogIMG from "../assets/imgs/projects/blog.png";
import finsweetIMG from "../assets/imgs/projects/finsweet.jpeg";
import crudvueIMG from "../assets/imgs/projects/crud-vue.png";
import memorygameIMG from "../assets/imgs/projects/memory-game.png";
import notepadIMG from "../assets/imgs/projects/notepad.png";
import qrcodeIMG from "../assets/imgs/projects/qr-code-generator.png";
import githubapiIMG from "../assets/imgs/projects/github-api.jpeg";

import { Container, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
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
    Vuedotjs,
} from "@styled-icons/simple-icons";
import { Slider } from "components/Slider";
import { BackgroundImageSVG } from "../assets/BackgroundImageSVG";

export const ProjectsSection = () => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    return (
        <>
            {isLargerThan800 ? (
                <Wrapper
                    direction="column"
                    paddingInline="0"
                    padding={["2rem 3rem", "2rem 6rem", null, "4rem 6rem"]}
                    id="projects"
                    bgImage={BackgroundImageSVG}
                >
                    <Title>PROJETOS</Title>
                    <SimpleGrid columns={[1, null, 2, 2, 3]} spacing="1rem">
                        {projectList}
                    </SimpleGrid>
                </Wrapper>
            ) : (
                <Wrapper
                    bgImage={BackgroundImageSVG}
                    padding="3rem 0"
                    direction="column"
                    id="projects"
                >
                    <Title>PROJETOS</Title>

                    <Container
                        maxW="100%"
                        paddingInline={["0rem", null, null, "1rem"]}
                    >
                        <Slider>{projectList}</Slider>
                    </Container>
                </Wrapper>
            )}
        </>
    );
};

const projectList = [
    <ProjectCard
        name="Annotare"
        key="Annotare"
        description={`Uma página para salvar suas anotações no armazenamento do navegador. Você pode mudar o tema e o layout de exibição. `}
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
    />,

    <ProjectCard
        name="Blog Undefined"
        key="Blog Undefined"
        description={`Blog para compartilhar conteúdos que estou aprendendo ou que entendo como relevantes.`}
        imageSrc={blogIMG}
        imageAlt="Imagem do projeto Blog"
        githubUrl="https://github.com/gustavohernandes11/blog"
        deployUrl="https://blogundefined.netlify.app/"
        techSpan={
            <>
                <Typescript size={15} />
                <Nextdotjs size={15} />
                <Strapi size={15} />
            </>
        }
    />,

    <ProjectCard
        name="Finsweet"
        key="Finsweet"
        description={
            "Site de página única para apresentação de uma agência de negócios. Criado a partir do design em Figma."
        }
        imageSrc={finsweetIMG}
        imageAlt="Imagem do projeto Finsweet"
        githubUrl="https://github.com/gustavohernandes11/finsweet"
        deployUrl="https://finsweet-gh.netlify.app/"
        techSpan={
            <>
                <Nextdotjs size={15} />
                <Html5 size={15} />
                <Css3 size={15} />
            </>
        }
    />,

    <ProjectCard
        name="Jogo da memória"
        key="Jogo da memória"
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
    />,

    <ProjectCard
        name="Gerador de QR code"
        key="Gerador de QR code"
        description="Você insere qualquer valor no campo de texto e após alguns segundos é produzido um QR code conforme a sua mensagem."
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
    />,

    <ProjectCard
        name="Buscador de perfil do Github"
        key="Buscador de perfil do Github"
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
    />,

    <ProjectCard
        name="Bloco de anotações com autenticação de usuários"
        key="Bloco de anotações com autenticação de usuários"
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
    />,

    <ProjectCard
        name="App de cadastro de usuários"
        key={"App de cadastro de usuários"}
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
    />,
];
