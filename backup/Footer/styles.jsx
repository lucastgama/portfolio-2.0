import styled from "styled-components";
import * as V from "../../Variables";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${V.colors.secondaryColor};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
`;

export const Icon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${V.colors.accentColor};
  font-size: ${V.fontSize[6]};
  width: 45px;
  height: 45px;
  z-index: 10;
  transition: all 1s ease-out;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    background: ${V.colors.headerColor};
    border-radius: 5px;
    transform: rotate(45deg);
    z-index: -1;
    transition: all 1s ease-out;
  }
  &:hover {
    &:before {
      transform: rotate(345deg);
    }
  }
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    :before {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Description = styled.p`
  font-size: ${V.fontSize[8]};
  color: ${V.colors.whiteSmok};
  font-weight: 300;
`;
