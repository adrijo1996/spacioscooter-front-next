import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const SubtitleStyled = styled.h3`
  text-align: center;
  margin: 20px 100px;
`;

const TextStyled = styled.p`
  text-align: center;
  margin: 20px 40px;
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
      <TitleStyled>Participa en nuestros concursos</TitleStyled>
      <ImageStyled src="/lottery.jpg" alt="concursos" height="400px" />
      <SubtitleStyled>
        Participa en nuestros sorteos y gana premios como cestas, botellas de
        vino, y todo tipo de equipamiento para motoristas
      </SubtitleStyled>
      <Separator />
      <TextStyled>
        Los sorteos realizados en nuestra asociación van desde rifas benéficas
        hasta concursos para ver quien tiene la mejor moto, así que no te cortes
        y participa ya. Podrás encontrar toda la información relativa en
        Facebook.
      </TextStyled>
    </div>
  );
};
