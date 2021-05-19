import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const SubtitleStyled = styled.h2`
  text-align: center;
  margin: 20px 100px;
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
      <TitleStyled>Comunicaciones</TitleStyled>
      <ImageStyled src="/comunicaciones.jpg" alt="ImageRuta" width="500px" />
      <TextStyled>
        En este apartado incorporaremos comunicaciones de interés para los
        socios del Spacio Scooter. Desde el día 23.06.2019 somos el Grupo Maxsym
        una Asociación sin ánimo de lucro.
      </TextStyled>
      <Separator />
      <TitleStyled>Resultado Elecciones 8 de Noviembre</TitleStyled>
      <SubtitleStyled>Presidente : Guzmán Romero Ruiz</SubtitleStyled>
      <SubtitleStyled>
        Secretario: Juan Manuel Jiménez Cabanillas
      </SubtitleStyled>
      <SubtitleStyled>Tesorero: Raúl López Oset</SubtitleStyled>
    </div>
  );
};
