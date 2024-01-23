import styled from "styled-components";
import * as V from "../../Variables";

export const Section = styled.section`
  background-color: ${V.colors.primaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5em 0;
  @media screen and (max-width: 1024px) {
    padding: 1em 0;
  }
`;

export const Title = styled.h2`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${V.fontSize[2]};
  color: ${V.colors.headerColor};
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
  &:after {
    content: "Quem sou eu ?";
    color: ${V.colors.accentColor};
    position: absolute;
    transform: matrix(-50%, -50%);
    font-size: ${V.fontSize[9]};
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
    font-size: ${V.fontSize[4]};
    &:after {
      font-size: ${V.fontSize[11]};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 8px;
    font-size: ${V.fontSize[5]};
    &:after {
      font-size: ${V.fontSize[12]};
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 0.9em 0;
    align-items: center;
    text-align: center;
  }
`;

export const WhoIam = styled.h3`
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[6]};
  margin-bottom: 1em;
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[7]};
    margin-bottom: 0.5em;
  }
`;

export const Description = styled.p`
  color: ${V.colors.lightGray};
  font-size: ${V.fontSize[7]};
  font-weight: 300;
  margin-bottom: 1em;
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[8]};
    margin-bottom: 0.5em;
  }
`;

export const Logos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 0;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 34px;
  margin: 0.2em;
  @media screen and (max-width: 480px) {
    height: 32px;
    margin: 0.1em;
  }
`;

export const ContainerPicture = styled.div`
  position: relative;
  border-radius: 25px;
  border: 2px solid ${V.colors.headerColor};
  padding: 20px;
  width: 400px;
  height: 450px;
  @media screen and (max-width: 1024px) {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    padding: 10px;
  }
`;

export const Picture = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  z-index: 1;
  border-radius: 25px;

  @media screen and (max-width: 1024px) {
    border-radius: 50%;
  }
`;
