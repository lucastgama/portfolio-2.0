import * as S from "./styles";

const PDF_URL = "./lucasgama.pdf";

const BtnGold = (props) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(PDF_URL);
      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = PDF_URL;
      a.click();
    } catch (error) {
      console.error(error);
    }
  };

  return <S.Button onClick={handleDownload}>{props.children}</S.Button>;
};

export default BtnGold;
