import styled from "styled-components";
import * as V from "../../Variables";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5em 0;
  @media screen and (max-width: 1024px) {
    padding: 1em 0;
  }
`;

export const ContainerModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  box-shadow: none;
  padding: 1rem 1.5rem;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 5fr 2fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 9fr 1fr 2fr;
  }
  @media screen and (max-width: 480px) {
    background-color: ${V.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
  z-index: 10;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ContainerTextTitle = styled.h3`
  color: ${V.colors.accentColor};
  font-size: ${V.fontSize[7]};
  font-weight: 500;
  padding: 0px 10px 0 0;
  text-shadow: 0 0 0.4em rgba(255, 255, 255, 0.4);
`;

export const ContainerTextSubtitle = styled.h3`
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[8]};
  font-weight: 400;
  padding: 0px 10px;
`;

export const ContainerSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    margin: 10px;
  }
`;
