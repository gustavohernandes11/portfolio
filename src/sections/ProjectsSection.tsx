import { Section } from "../components/Section";
import { ProjectModal } from "../components/ProjectModal";
import { Heading } from "../components/Heading";
import { Grid } from "@mui/material";

import annotareIMG from "../assets/imgs/projects/annotareFullscreen.png";
import blogHernandesImage from "../assets/imgs/projects/blogHernandesImage.jpeg";
import landingPageIMG from "../assets/imgs/projects/landing-page-exemple.png";
import crudvueIMG from "../assets/imgs/projects/CRUDvue1.png";
import memorygameIMG from "../assets/imgs/projects/memoryGameImage.png";
import notepadIMG from "../assets/imgs/projects/notepadHome.png";
import qrcodeIMG from "../assets/imgs/projects/QRcodeImage.png";
import githubapiIMG from "../assets/imgs/projects/search-github-profiles.png";

export const ProjectsSection = () => {
    return (
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
                    projectName="Blog"
                    description={`Blog para compartilhar conteúdos que estou aprendendo ou que entendo como relevantes.`}
                    imageSrc={blogHernandesImage}
                    imageAlt="Imagem do projeto Blog"
                    githubUrl="https://github.com/gustavohernandes11"
                    deployUrl="https://blog-hernandes.netlify.app/"
                />
                <ProjectModal
                    projectName="Landing page exemple"
                    description={
                        "Site de página única para apresentação de produtos."
                    }
                    imageSrc={landingPageIMG}
                    imageAlt="Imagem do projeto Landing Page exemple"
                    githubUrl="https://github.com/gustavohernandes11/strapi-boilerplate-landing-page"
                    deployUrl="https://landing-page-exemple.netlify.app/"
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
                    projectName="Bloco de anotações com autenticação de usuários"
                    description="Possui tela de login e registro para usuários, tela de administrador e uma interface inicial parecida com a do Annotare. As informações são gravadas com PostgreSQl"
                    imageSrc={notepadIMG}
                    imageAlt="Tela inicial do projeto bloco de anotações"
                    githubUrl="https://github.com/gustavohernandes11/notepad"
                />
                <ProjectModal
                    projectName="App de cadastro de usuários"
                    description={`Projeto criado com Vue. Registra as informações da interface em um Banco de dados PostgreSQL (com Knex).`}
                    imageSrc={crudvueIMG}
                    imageAlt="Imagem do projeto cadastro de usuários"
                    githubUrl="https://github.com/gustavohernandes11/user-control-app"
                />
            </Grid>
        </Section>
    );
};
