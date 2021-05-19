import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const SubtitleStyled = styled.h2`
  text-align: center;
  color: black;
  margin: 20px 100px;
`;

const LinkStyled = styled.a`
  text-align: center;
  color: black;
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
      <TitleStyled>Consulta nuestros viajes</TitleStyled>
      <ImageStyled src="/viaje.jpg" alt="ImageRuta" width="500px" />
      <TextStyled>
        Son los viajes y experiencias que hemos vivido y disfrutando viajando
        con nuestras motos. Son algo más que las rutas de un día. Compartir
        experiencias de viaje para ayudar e inspirar a otros compañeros. Conoce
        destinos, alojamientos y actividades y apóyate en ellas para planificar
        tu viaje y comparte con nosotros los viajes con tu motos. Colabora
        enviándonos tu experiencia a info@grupomaxsym.es
      </TextStyled>
      <Separator />
      <SubtitleStyled>
        <LinkStyled href="/ruta-en-solitario">
          Ruta en solitario: Un viaje por España
        </LinkStyled>
      </SubtitleStyled>
      <ImageStyled src="/cesar-gironella.jpg" alt="ImageRuta" height="500px" />
      <Separator />
    </div>
  );
};
