import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false);

  const handleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY >= 25) {
      setShouldChangeBackground(true);
    } else {
      setShouldChangeBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "home" },
    { name: "Sobre", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Projetos", to: "projects" },
    { name: "Contato", to: "contact" },
  ];

  const renderLinks = () =>
    navLinks.map((link) => (
      <S.Link key={link.to}>
        <Link spy={true} smooth={true} offset={-30} duration={350} to={link.to}>
          {link.name}
        </Link>
      </S.Link>
    ));

  return (
    <S.Header $changeColor={shouldChangeBackground}>
      <S.Navbar>
        <S.Logo>
          <Link spy={true} smooth={true} offset={-30} duration={350} to="home">
            Lucas Gama
          </Link>
        </S.Logo>
        <S.NavbarLinks>{renderLinks()}</S.NavbarLinks>
        <S.Buttons>
          <S.SocialMedia>
            <S.Icons
              href="https://www.instagram.com/lucas.t.gama/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </S.Icons>
            <S.Icons
              href="https://www.linkedin.com/in/lucas-tgama/"
              target="_blank"
              aria-label="linkedin"

            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </S.Icons>
            <S.Icons href="https://github.com/lucastgama" target="_blank" aria-label="Github" >
              <FontAwesomeIcon icon={faGithub} />
            </S.Icons>
          </S.SocialMedia>
          <S.BtnMobile onClick={handleMobileNavbar}>
            <S.Burger $isOpen={isMobileNavbarOpen} />
          </S.BtnMobile>
        </S.Buttons>
        <S.NavMobile $isOpen={isMobileNavbarOpen}>
          <S.NavMobileLinks>{renderLinks()}</S.NavMobileLinks>
        </S.NavMobile>
      </S.Navbar>
    </S.Header>
  );
};

export default Navbar;
