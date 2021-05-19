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
      <TitleStyled>Próximos eventos</TitleStyled>
      <ImageStyled src="/eventos.jpg" alt="eventos" width="500px" />
      <TextStyled>
        Si quieres enterarte antes que nadie sobre la fecha y el lugar de las
        próximas salidas este es tu apartado. Aquí se comunicarán las próximas
        salidas, tanto rutas como viajes. No hay que apuntarse, solo vente y
        disfruta de la carretera con tus amigos.
      </TextStyled>
      <Separator />
    </div>
  );
};
