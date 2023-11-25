import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import BtnGold from "../Button";
import { logos } from "../../Variables";

const renderLogos = () => {
  return logos.map((logo, index) => (
      <S.Logo key={index} src={logo.icon} alt={logo.alt} title={logo.alt} />
  ));
};

const About = () => (
  <S.Section id="about">
    <S.Title>Sobre</S.Title>
    <S.Container className="mx-width">
      <S.ContainerPicture>
        <S.Picture src="./images/about.jpeg" alt="Lucas Gama" />
      </S.ContainerPicture>
      <S.ContainerInformation>
        <S.WhoIam>Sou Comunicativo e Criativo</S.WhoIam>
        <S.Description>
          Desde que comecei minha jornada como desenvolvedor web, fiz sites de
          vendas usando Wordpress e Next.js, realizei diversas demandas e fiz
          diversos sites com React e Next. Atualmente estou envolvido com
          Three.js, porque gosto de dar vida às ideias dos clientes, gosto da
          arte que vai virar o projeto e dar experiencias únicas para os
          usuários. Com minhas habilidades, uma boa comunicação e bastante café,
          entendo que se pode realizar qualquer coisa.
        </S.Description>
        <S.Description>
          Sou curioso por natureza, sempre procuro algo novo para implementar e
          deixar unico o site, minhas fontes de pesquisas são as documentações
          e, o meu favorito, stackoverflow, gosto de trabalhar em equipe, porque
          entendo que é assim que se evolui, pois procuro sempre melhorar as
          minhas competências profissionais e pessoais.
        </S.Description>
        <S.Description>
          Se você estiver procurando por um desenvolvedor web criativo e
          experiente para o seu próximo projeto, sinta-se à vontade para entrar
          em contato comigo. Estou sempre aberto a novas oportunidades e
          desafios, e adoraria ajudá-lo a criar uma experiência online incrível
          para seus usuários. Obrigado por visitar meu site e espero que você
          goste do que vê!
        </S.Description>
        <S.Logos>{renderLogos()}</S.Logos>
        <BtnGold>
          <FontAwesomeIcon icon={faFile} /> Download CV
        </BtnGold>
      </S.ContainerInformation>
    </S.Container>
  </S.Section>
);

export default About;
