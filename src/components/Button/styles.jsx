import styled from "styled-components";
import * as V from "../../Variables";

export const Button = styled.div`
  width: 150px;
  height: 40px;
  padding: 5px;
  margin-top: 5px;
  background-color: ${V.colors.accentColor};
  color: ${V.colors.primaryColor};
  font-size: ${V.fontSize[7]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: ${V.colors.primaryColor};
    border: 1px solid ${V.colors.accentColor};
    color: ${V.colors.accentColor};
  }
`;
