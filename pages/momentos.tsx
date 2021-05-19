import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const TextStyled = styled.p`
  text-align: center;
  margin: 20px 60px;
`;

const Separator = styled.hr`
  margin: 50px 100px;
`;

const ImageStyled = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export default () => {
  return (
    <div>
      <TitleStyled>Rememorando momentos</TitleStyled>
      <ImageStyled src="/momentos.jpg" alt="momentos" width="500px" />
      <TextStyled>
        Si quieres conocer nuestro lado más personal estás en buen lugar.
        Nosotros no solo somos un grupo de motoristas, somos un grupo de amigos,
        y queremos crecer con esa afición en común. Este es el lugar donde
        compartir nuestros momentos más emotivos y especiales, dejando así un
        recuerdo y una demostración del buen ambiente que tenemos.
      </TextStyled>
      <Separator />
    </div>
  );
};
