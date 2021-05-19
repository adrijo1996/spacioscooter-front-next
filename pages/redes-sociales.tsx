import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const IconsLink = styled.a`
  margin: 0px 10px;
`;

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const TextStyled = styled.p`
  text-align: flex-start;
  margin: 20px;
  margin-left: 180px;
`;

const Separator = styled.hr`
  margin: 50px 100px;
`;

const DivStyled = styled.div`
  text-align: center;
  margin: 50px 80px;
`;

export default () => {
  return (
    <div>
      <TitleStyled>Redes Sociales</TitleStyled>
      <TextStyled>
        Son muchas las razones para estar actualmene en Facebook, instagram,
        Youtube y Twitter. La principal es porque nos divertimos, aunque tambien
        hay otros motivos.
        <br /> Porque es la mejor manera de mantener contacto con otros amigos
        que disfrutan de la moto.
        <br /> Porque podemos ayudarnos, conocer curiosidades, noticias y nos
        mantiene a todos informados de lo que ocurre a alrededor de nuestras
        scooter.
        <br /> Porque hacemos rutas, compartimos experiencias y sobre todo
        porque nos permite mantener y descubrir amigos, incluso de muy lejos.
        <br />
        Porque podemos divertirnos compartiendo videos, fotos, artículos, rutas,
        viajes, experiencias que nos gustan y nos divierten. Las redes sociales
        son perfectas para contactar y compartir nuestro interés por el mundo de
        la moto.
        <br /> También para estar informado de todo lo que sucede en torno a
        nuestras motos y a las actividades hacemos en el grupo.
      </TextStyled>
      <Separator />
      <DivStyled>
        <IconsLink
          href="https://www.facebook.com/groups/300582213989272/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            color="blue"
            style={{ width: "100px" }}
          />
        </IconsLink>
        <IconsLink
          href="https://www.instagram.com/spacio_scooter/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagramSquare}
            color="purple"
            style={{ width: "100px" }}
          />
        </IconsLink>
        <IconsLink
          href="https://www.youtube.com/channel/UCY1abKWXVhk3T3m94HwMuWw"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faYoutubeSquare}
            color="red"
            style={{ width: "100px" }}
          />
        </IconsLink>
      </DivStyled>
    </div>
  );
};
