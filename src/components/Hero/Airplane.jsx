import styled from "styled-components";
import * as V from "../../Variables";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(./images/banner-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  & a {
    align-items: center;
    justify-content: center;
    display: flex;
    align-self: center;
  }
`;

const Title = styled.h1`
  font-size: ${V.fontSize[2]};
  color: ${V.colors.whiteSmok};
  @media only screen and (max-width: 1024px) {
    font-size: ${V.fontSize[3]};
  }
  @media only screen and (max-width: 480px) {
    font-size: ${V.fontSize[4]};
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Airplane = () => {
  return (
    <Section>
      <Container className="mx-width">
        <Info>
          <Title>Em Desenvolvimento</Title>
        </Info>
        <Image src="./images/astronaut.svg" alt="astronaut" />
      </Container>
    </Section>
  );
};

export default Airplane;
