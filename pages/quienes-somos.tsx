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
      <TitleStyled>¿Quiénes somos?</TitleStyled>
      <ImageStyled src="/quienes-somos.jpg" alt="quienes-somos" width="500px" />
      <TextStyled>
        Nuestro grupo nació para disfrutar y compartir una pasión entre buenos
        amigos. La red nos proporciona un lugar de encuentro para compartir
        experiencias con nuestras Maxsiscooters, conocernos y pasar buenos
        momentos haciendo rutas y colaborando en otras muchas cosas. Un grupo
        con scooters de varias marcas pero con algo importante en común: las
        ganas de disfrutarlas. En la actualidad facebook es la red donde estamos
        más activos. También estamos en otras como Instagram y Youtube donde
        participamos con fotos o vídeos de nuestras motos, tanto de nuestras
        rutas, como de otras muchas actividades.
      </TextStyled>
      <Separator />
    </div>
  );
};
