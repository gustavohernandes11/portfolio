import { Title } from "components/Title";
import { Card, ProjectType } from "components/Card";
import { Grid } from "components/Grid";
import { SectionContainer } from "components/SectionContainer";

type ProjectsType = {
    projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsType) => {
    return (
        <SectionContainer>
            <Title id="projects">PROJETOS</Title>
            <Grid>
                {projects.map((proj) => (
                    <Card
                        key={proj.title}
                        title={proj.title}
                        description={proj.description}
                        deployUrl={proj?.deployUrl}
                        githubUrl={proj?.githubUrl}
                        image={proj.image}
                    />
                ))}
            </Grid>
        </SectionContainer>
    );
};

// const projectList = [
//     <ProjectCard
//         name="Annotare"
//         key="Annotare"
//         description={`Uma página para salvar suas anotações no armazenamento do navegador. Você pode mudar o tema e o layout de exibição. `}
//         imageSrc={annotareIMG}
//         imageAlt="Imagem do projeto Annotare"
//         githubUrl="https://github.com/gustavohernandes11/annotare"
//         deployUrl="https://annotare.netlify.app/"
//         techSpan={
//             <>
//                 <Typescript size={15} />
//                 <ReactLogo size={15} />
//                 <Styledcomponents size={15} />
//             </>
//         }
//     />,

//     <ProjectCard
//         name="Blog Undefined"
//         key="Blog Undefined"
//         description={`Blog para compartilhar conteúdos que estou aprendendo ou que entendo como relevantes.`}
//         imageSrc={blogIMG}
//         imageAlt="Imagem do projeto Blog"
//         githubUrl="https://github.com/gustavohernandes11/blog"
//         deployUrl="https://blogundefined.netlify.app/"
//         techSpan={
//             <>
//                 <Typescript size={15} />
//                 <Nextdotjs size={15} />
//                 <Strapi size={15} />
//             </>
//         }
//     />,

//     <ProjectCard
//         name="Finsweet"
//         key="Finsweet"
//         description={
//             "Site de página única para apresentação de uma agência de negócios. Criado a partir do design em Figma."
//         }
//         imageSrc={finsweetIMG}
//         imageAlt="Imagem do projeto Finsweet"
//         githubUrl="https://github.com/gustavohernandes11/finsweet"
//         deployUrl="https://finsweet-gh.netlify.app/"
//         techSpan={
//             <>
//                 <Nextdotjs size={15} />
//                 <Html5 size={15} />
//                 <Css3 size={15} />
//             </>
//         }
//     />,

//     <ProjectCard
//         name="Jogo da memória"
//         key="Jogo da memória"
//         description="Criado com React. É um jogo da memória com 16 cartas que contabiliza suas jogadas e sua pontuação. Acesse e jogue."
//         imageSrc={memorygameIMG}
//         imageAlt="Imagem do projeto jogo da memória"
//         githubUrl="https://github.com/gustavohernandes11/memory-game"
//         deployUrl="https://gh-memory-game.netlify.app/"
//         techSpan={
//             <>
//                 <ReactLogo size={15} />
//                 <Html5 size={15} />
//                 <Css3 size={15} />
//             </>
//         }
//     />,

//     <ProjectCard
//         name="Gerador de QR code"
//         key="Gerador de QR code"
//         description="Você insere qualquer valor no campo de texto e após alguns segundos é produzido um QR code conforme a sua mensagem."
//         imageSrc={qrcodeIMG}
//         imageAlt="Imagem do projeto QR-code-generator"
//         githubUrl="https://github.com/gustavohernandes11/qrcode-generator"
//         deployUrl="https://appgeradordeqrcode.netlify.app"
//         techSpan={
//             <>
//                 <ReactLogo size={15} />
//                 <Html5 size={15} />
//                 <Css3 size={15} />
//             </>
//         }
//     />,

//     <ProjectCard
//         name="Buscador de perfil do Github"
//         key="Buscador de perfil do Github"
//         description="Insira um nome de usuário do github no campo de texto e será retornado algumas informações do perfil e seus repositórios."
//         imageSrc={githubapiIMG}
//         imageAlt="Imagem da tela inicial do projeto buscador de perfil do Github"
//         githubUrl="https://github.com/gustavohernandes11/search-github-profiles"
//         deployUrl="https://searchprofilesgithub-v2.netlify.app/"
//         techSpan={
//             <>
//                 <ReactLogo size={15} />
//                 <Git size={15} />
//                 <Styledcomponents size={15} />
//             </>
//         }
//     />,
// ];
