import styled from "styled-components";
import * as V from "../../Variables";

export const Header = styled.header.attrs((props) => ({
  $changeColor: props.$changeColor || false,
  $isOpen: props.$isOpen || false,
}))`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$changeColor ? `${V.colors.headerColor}` : `none`};
  box-shadow: ${(props) =>
    props.$changeColor ? `0px 0px 20px 1px rgba(0, 0, 0, 0.5)` : `none`};
  padding: 1rem 1.5rem;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1024px) {
    padding: 0.8rem 1.1rem;
  }
`;

export const Logo = styled.h3`
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[7]};
  align-self: center;
  cursor: pointer;
  font-weight: 400;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
  }
`;

export const NavbarLinks = styled.ul`
  width: 100%;
  display: flex;
  justify-self: flex-start;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Link = styled.li`
  display: flex;
  justify-content: space-around;
  list-style: none;
  color: ${V.colors.whiteSmok};
  font-size: ${V.fontSize[7]};
  font-weight: 400;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${V.colors.accentColor};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    color: ${V.colors.accentColor};
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media screen and (max-width: 1024px) {
    font-size: ${V.fontSize[8]};
  }
  @media screen and (max-width: 768px) {
    font-size: ${V.fontSize[9]};
  }
  @media screen and (max-width: 480px) {
    display: block;
    margin: 0.5rem 0;
    padding: 0.7rem 0;
    color: ${V.colors.whiteSmok};
    font-size: ${V.fontSize[6]};
    text-decoration: none;
    text-align: right;
    opacity: ${(props) => (props.$isOpen ? `0` : `1`)};
    transform: ${(props) =>
        props.$isOpen ? `translateY(-10px)` : `translateY(0px)`},
      skew(16deg);
    &:nth-child(1) {
      transition: all 575ms 475ms;
    }
    &:nth-child(2) {
      transition: all 575ms 525ms;
    }
    &:nth-child(3) {
      transition: all 575ms 575ms;
    }
    &:nth-child(4) {
      transition: all 575ms 625ms;
    }
    &:nth-child(5) {
      transition: all 575ms 775ms;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    justify-content: flex-end;
    padding: 0 1rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  font-size: ${V.fontSize[6]};
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Icons = styled.a`
  text-decoration: none;
  padding: 0 0.5rem;
  color: ${V.colors.whiteSmok};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    color: ${V.colors.accentColor};
  }
`;

export const Button = styled.button`
  justify-self: center;
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${V.colors.whiteSmok};
  font-weight: 500;
  font-size: ${V.fontSize[8]};
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: ${V.colors.accentColor};
  }

  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
    font-size: ${V.fontSize[9]};
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BtnMobile = styled.button`
  display: none;
  padding-top: 20px;
  right: 35px;
  z-index: 1000;
  background: none;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Burger = styled.span`
  position: relative;
  display: block;
  width: 28px;
  height: 4px;
  margin: 0 auto;
  background: ${V.colors.accentColor};
  transform: ${(props) =>
    props.$isOpen ? `skew(5deg) translateY(-8px) rotate(-45deg)` : `skew(3deg)`};
  transition: all 0.275s;
  &:after,
  &:before {
    content: "";
    display: block;
    height: 100%;
    background: ${V.colors.accentColor};
    transition: all 0.275s;
  }
  &:after {
    transform: ${(props) =>
      props.$isOpen
        ? `translateY(-12px) translateX(10px) skew(-20deg)`
        : ` translateY(-12px) translateX(-2px) skew(-20deg)`};
    opacity: ${(props) => (props.isOpen ? `0` : `1`)};
  }
  &:before {
    transform: ${(props) =>
      props.$isOpen
        ? `translateY(0px) skew(-10deg) rotate(75deg)`
        : `translateY(-16px) skew(-10deg) translateX(2px)`};
  }
`;

export const NavMobile = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  opacity: ${(props) => (props.$isOpen ? `1` : `0`)};
  z-index: ${(props) => (props.$isOpen ? `100` : `-1`)};
  visibility: ${(props) => (props.$isOpen ? `visible` : `hidden`)};
  transition: all 0.375s;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: ${V.colors.headerColor};
    transform-origin: 0 0;
    transform: ${(props) =>
      props.$isOpen
        ? `skew(-14deg) translateX(0)`
        : `skew(-14deg) translateX(-120%)`};
    transition: all 0.275s 0.1s;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const NavMobileLinks = styled.ul`
  display: inline-flex;
  flex-direction: column;
  height: 90%;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(-18%) skew(-16deg);
`;
