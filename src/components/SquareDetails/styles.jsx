import styled from "styled-components";
import * as V from "../../Variables";

export const Square = styled.div`
  width: 65px;
  height: 65px;
`;

export const InsideSquare = styled.span`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${V.colors.whiteSmok};
  border-radius: 0px 10px;
  -webkit-clip-path: polygon(
    20% 0%,
    100% 0,
    100% 80%,
    80% 100%,
    0 100%,
    0% 20%
  );
  clip-path: polygon(20% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%);
  transition: all ease-in 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    background-color: ${V.colors.accentColor};
  }
  & img {
    height: 100%;
    width: auto;
  }
`;
