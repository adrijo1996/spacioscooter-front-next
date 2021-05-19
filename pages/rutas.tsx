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

const RutasStyled = styled.a`
  text-align: center;
  display: block;
  font-weight: bold;
  margin: 20px 60px;
  color: black;
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
      <TitleStyled>Consulta nuestras rutas</TitleStyled>
      <ImageStyled src="/ruta2.jpg" alt="ImageRuta" height="500px" />
      <TextStyled>
        Aquí es donde podrás consultar todas las rutas que hemos realizado hasta
        el momento. La clasificación se realiza por la provincia de inicio de la
        ruta y el orden dentro de la provincia es la distancia recorrida. Puedes
        enlazar para acceder al detalle de la misma
      </TextStyled>
      <Separator />
      <SubtitleStyled>Álava</SubtitleStyled>
      <RutasStyled href="/ruta-de-los-tres-valles">
        Ruta de los tres valles - La Rioja en Moto 292 Km.
      </RutasStyled>
      <RutasStyled href="/ruta-merindades-y-la-bureba">
        Merindades y La Bureba 289 Km.
      </RutasStyled>
      <RutasStyled href="/ruta-navarra-media">
        Navarra Media - 215 Km.
      </RutasStyled>
      <RutasStyled href="/ruta-parque-natural-valderejo">
        Rodeando el Parque Natural de Valderejo 171 Km.
      </RutasStyled>
      <RutasStyled href="/ruta-opacua">
        Opacua / Arraya-Maestu - 64 Km.
      </RutasStyled>
      <Separator />
      <SubtitleStyled>Madrid</SubtitleStyled>
      <RutasStyled href="/rutas/#">
        Escalona Torrijos y Toledo - 208 Km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Madrid - Muralla China - 205 Km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Cebreros - Pto. Arrebatacapas - 200 Km
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Sierra Norte de Guadalajara - 196 Km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Sierra Pobre de Madrid - 189 km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        El Atazar - Con todas las cilindradas - 145 Km
      </RutasStyled>
      <RutasStyled href="/rutas/#">El Atazar y Canencia - 140 Km.</RutasStyled>
      <RutasStyled href="/rutas/#">Robledo de Chavela - 111 Km.</RutasStyled>
      <RutasStyled href="/rutas/#">
        Navacerrada, Rascafría y Miraflores - 101 Km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Madrid, Torrejón de la Calzada, Chinchón, Villarejo de Salvanés - 143
        km.
      </RutasStyled>
      <RutasStyled href="/rutas/#" />
      <SubtitleStyled>Mallorca</SubtitleStyled>
      <RutasStyled href="/rutas/#">
        Ruta de los tres valles - La Rioja en Moto 292 Km.
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Tramontana - Illes Balears - 87 Km
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Rutas Baleares Pont D´Inca - Campanet
      </RutasStyled>
      <RutasStyled href="/rutas/#">
        Tramontana por Es Coll de Sacreu{" "}
      </RutasStyled>
      <RutasStyled href="/rutas/#">Son Oms Mallorca</RutasStyled>
      <Separator />
      <SubtitleStyled>Valencia</SubtitleStyled>
      <RutasStyled href="/rutas/#">
        Tabernes de la Vall - Alzira - Navalón - 192 Km
      </RutasStyled>
      <Separator />
      <SubtitleStyled>Zaragoza</SubtitleStyled>
      <RutasStyled href="/rutas/#">
        Castillo de Loarre y Anzáñigo - Ruta de la 1ª Kedada del Grupo Maxsym
      </RutasStyled>
    </div>
  );
};
