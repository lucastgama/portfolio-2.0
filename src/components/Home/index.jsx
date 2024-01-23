import * as S from "./styles";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <S.Section id="home">
      <S.Spinner />
      <S.ContainerModal>
        <Hero />
      </S.ContainerModal>
      <S.Footer>
        <S.Navigation>
          <S.ContainerText>
            <S.ContainerTextTitle>
              Lucas <br></br>Gama
            </S.ContainerTextTitle>
            <S.ContainerTextSubtitle>Desenvolvedor web</S.ContainerTextSubtitle>
            <S.ContainerTextSubtitle>Freelancer</S.ContainerTextSubtitle>
          </S.ContainerText>
          <div></div>
        </S.Navigation>
      </S.Footer>
    </S.Section>
  );
};

export default Home;
