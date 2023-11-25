import SquareDetails from "../SquareDetails";
import avatar from "/images/background-1.png";
import bedroom from "/images/background-2.png";
import airplane from "/images/background-3.png";


import * as S from "./styles";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <S.Section id="home">
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
          <S.ContainerSquare>
            <SquareDetails img={avatar} value={1} />
            <SquareDetails img={bedroom} value={2} />
            <SquareDetails img={airplane} value={3} />
          </S.ContainerSquare>
        </S.Navigation>
      </S.Footer>
    </S.Section>
  );
};

export default Home;
