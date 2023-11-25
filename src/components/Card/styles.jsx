import styled from "styled-components";
import * as V from "../../Variables";

export const CardLink = styled.a``;

export const Card = styled.div`
  width: 240px;
  height: 345px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.7rem;
  border: 1px solid ${V.colors.accentColor};
  background-color: ${V.colors.accentColor};
  background: linear-gradient(
    0deg,
    rgba(200, 200, 200, 0.2) 0%,
    rgba(187, 187, 187, 0.3) 100%
  );
  box-shadow: 0 0px 20px 1px rgba(183, 183, 183, 0.3);
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 60rem;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    box-shadow: -10px 0px 20px 1px rgba(199, 199, 199, 0.2);
    background: rgba(211, 211, 211, 0.15);
    transition: 1s all;
  }
  &:hover {
    transform: scale(1.05);
    &:before {
      top: -100%;
      left: 200%;
    }
  }
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  height: 160px;
  max-height: 160px;
`;

export const Title = styled.h4`
  color: ${V.colors.whiteSmok};
  font-weight: 500;
  padding: 10px 0;
  text-transform: capitalize;
`;

export const Works = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const WorkItem = styled.div`
  text-align: center;
  color: ${V.colors.lightGray};
  font-size: ${V.fontSize[9]};
  border-radius: 20px;
  border: 1px solid ${V.colors.accentColor};
  padding: 2px 10px;
  font-weight: 300;
`;

export const Description = styled.p`
  padding: 15px 0;
  color: ${V.colors.lightGray};
  font-size: ${V.fontSize[8]};
  font-weight: 300;
`;
