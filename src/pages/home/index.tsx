// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutSection,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Olá, meu nome é Augusto! Sou estudante de programação na Kenzie Academy Brasil e participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades em diferentes tecnologias. Formado em Engenharia Química, tive experiências de gestão de projetos e pessoas na indústria alimentícia.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <AboutSection id="about">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Sobre mim
          </Text>
          <br/>
          <Text as="h4" type="body1" color="grey1">
          Engenheiro químico com experiência em uma empresa multinacional, onde tive a oportunidade de conseguir promoções até chegar a um cargo de gestão. Nessa experiência, pude ter contato com sistemas de banco de dados e também em lógica de automação e isso despertou um interesse em migrar para a área de tecnologia. No cargo de gestão, pude estudar e aprimorar algumas soft skills como inteligência emocional e feedbacks.
          </Text>
          <br/>
          <Text as="h4" type="body1" color="grey1">
          Na área de tecnologia, estou me formando como desenvolvedor Full Stack com foco em Javascript/Typescript e Python.
          Estou extremamente motivado com essa nova carreira, pois estou constantemente à procura de me desenvolver e crescer profissionalmente.
          </Text>
        </Container>
      </AboutSection>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Tecnologias que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos conversar e trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No LinkedIn, compartilho meus principais projetos e estou disposto a trocar
                algumas ideias
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar meu perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  100% de dedicação
                </Text>{" "}
                em cada linha de código
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
