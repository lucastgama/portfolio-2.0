import styled from "styled-components";
import * as V from "../../Variables";

export const Section = styled.section`
  background: ${V.colors.secondaryColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 1.5rem 0;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${V.fontSize[2]};
  color: ${V.colors.headerColor};
  text-transform: uppercase;
  font-weight: 700;
  margin: 15px 0;
  &:after {
    content: "Algumas coisas em que trabalhei";
    color: ${V.colors.accentColor};
    position: absolute;
    transform: matrix(-50%, -50%);
    font-size: ${V.fontSize[9]};
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[3]};
    &:after {
      font-size: ${V.fontSize[10]};
    }
  }
  @media screen and (max-width: 480px) {
    font-size: ${V.fontSize[4]};
    &:after {
      font-size: ${V.fontSize[11]};
    }
  }
`;
