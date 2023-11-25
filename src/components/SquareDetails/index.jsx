import { useContext } from "react";
import { HeroContext } from "../../context/HeroContext";

import * as S from "./styles";

function SquareDetails({ img, value, alt }) {
  const { OptionValue } = useContext(HeroContext);

  const handleClick = () => {
    OptionValue(value);
  };

  return (
    <S.Square onClick={handleClick}>
      <S.InsideSquare>
        <img src={img} alt={alt} />
      </S.InsideSquare>
    </S.Square>
  );
}
SquareDetails.propTypes;

export default SquareDetails;
