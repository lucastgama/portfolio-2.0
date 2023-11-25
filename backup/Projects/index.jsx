import * as S from "./styles";
import Card from "../Card";
import * as V from "../../Variables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = V.projetosGit;

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <S.Section id="projects">
      <S.Container className="mx-width">
        <S.Title>Projetos</S.Title>
      </S.Container>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Link  key={index} to={project.link} target="blank">
            <Card
              languages={project.languages}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Link>
        ))}
      </Slider>
    </S.Section>
  );
};

export default Projects;
