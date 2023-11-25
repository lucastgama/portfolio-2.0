import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SkillContext } from "../../Context/SkillContext";
import * as S from "./styles";

const Downgrade = ({ title, description, value, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const { Downgrade } = useContext(SkillContext);

  const information = `${title}: ${description}`;

  const handleClick = () => {
    setIsActive((current) => !current);
    Downgrade(isActive ? -value : value);
  };

  return (
    <>
      {value === 4 ? (
        <Link to="/404">
          <S.SquareDowngrade
            className={isActive ? "active" : ""}
            onClick={handleClick}
            title={information}
          >
            <S.Icon src={icon} alt={title} />
          </S.SquareDowngrade>
        </Link>
      ) : (
        <S.SquareDowngrade
          className={isActive ? "active" : ""}
          onClick={handleClick}
          title={information}
        >
          <S.Icon src={icon} alt={title} />
        </S.SquareDowngrade>
      )}
    </>
  );
};

export default Downgrade;
