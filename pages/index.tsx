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

const IndexPage = () => {
  return (
    <div>
      <TitleStyled>Bienvenido a Spacio Scooter</TitleStyled>
      <ImageStyled src="/logo.jpeg" alt="SpacioScooterLogo" height="400px" />
      <Separator />
      <SubtitleStyled>Que es Spacio Scooter...</SubtitleStyled>
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
      <SubtitleStyled>Dónde estamos y qué hacemos ...</SubtitleStyled>
      <TextStyled>
        Por la cercanía para planificar rutas y otras salidas, hemos formado
        grupos en algunas provincias para rodar juntos y también para compartir
        unas cervezas acompañadas de buenos ratos entre amigos. En nuestro grupo
        todo el mundo es responsable de todo el mundo. Estamos creciendo, y con
        esa idea hemos creado esta web. Queremos que sea fácil localizar
        información sobre nuestras actividades. También es nuestra intención
        generar una mayor participación de todos los que ya estamos en el grupo,
        darnos a conocer para promover que nuevos moteros con cualquier
        maxsiscooter rueden y disfruten con nosotros.
      </TextStyled>
    </div>
  );
};

export default IndexPage;
