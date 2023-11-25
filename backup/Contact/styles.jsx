import styled from "styled-components";
import * as V from "../../Variables";

export const Section = styled.section`
  background-color: ${V.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  @media screen and (max-width: 1024px) {
    padding: 1rem 0;
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
  margin-bottom: 24px;
  font-weight: 700;
  &:after {
    content: "Diga um olá";
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
  grid-template-columns: 3fr 4fr;
  gap: 1.5rem;
  @media screen and (max-width: 1024px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Map = styled.div`
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 25;

  @media only screen and (max-width: 1024px) {
    width: 480px;
    gap: 15px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const btnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: ${V.colors.headerColor};
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[8]};
  font-weight: 300;
  border: none;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[9]};
  }
  @media screen and (max-width: 480px) {
    font-size: ${V.fontSize[10]};
    padding: 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  max-height: 250px;
  max-width: 687px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: ${V.colors.headerColor};
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[8]};
  font-weight: 300;
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[9]};
  }
  @media screen and (max-width: 480px) {
    font-size: ${V.fontSize[10]};
    padding: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: ${V.colors.accentColor};
  color: ${V.colors.primaryColor};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
  width: 200px;
  letter-spacing: 1px;
  font-weight: 600;
  &:hover {
    background-color: ${V.colors.whiteSmok};
  }
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[9]};
  }
  @media screen and (max-width: 480px) {
    font-size: ${V.fontSize[10]};
    padding: 0.8rem;
  }
`;
