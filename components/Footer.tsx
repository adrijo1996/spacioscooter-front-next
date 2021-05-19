import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const IconsLink = styled.a`
  margin: 0px 10px;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  margin-bottom: 0px;
  margin-top: 40px;
`;

export const Footer = () => {
  return (
    <FooterWrapper className="p-3 mb-2 bg-warning text-dark">
      <p>
        <b>
          &copy; 2019 -Grupo MaxSym España | Todos los derechos reservados |
        </b>
      </p>
      <IconsLink
        href="https://www.facebook.com/groups/300582213989272/"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          color="black"
          style={{ width: "20px" }}
        />
      </IconsLink>
      <IconsLink
        href="https://www.instagram.com/spacio_scooter/"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          color="black"
          style={{ width: "20px" }}
        />
      </IconsLink>
      <IconsLink
        href="https://www.youtube.com/channel/UCY1abKWXVhk3T3m94HwMuWw"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          color="black"
          style={{ width: "20px" }}
        />
      </IconsLink>
    </FooterWrapper>
  );
};
