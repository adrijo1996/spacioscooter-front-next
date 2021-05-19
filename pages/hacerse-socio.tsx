import styled from "styled-components";
import { CrearSocioForm } from "../components/forms/CrearSocioForm";

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
      <TitleStyled>Ya puedes formar parte del grupo</TitleStyled>
      <ImageStyled src="/socio.jpg" alt="hazteSocio" height="400px" />
      <SubtitleStyled>
        Existimos gracias a los socios y el futuro solo es posible si estamos
        juntos, échanos una mano y hazte socio de Spacio Scooter
      </SubtitleStyled>
      <Separator />
      <TextStyled>
        <b>
          En esta página puedes registarte como socio. Podrás abonar la cuota
          una vez ya estés registrado. Sigue los siguientes pasos:
        </b>
      </TextStyled>
      <CrearSocioForm />
      <Separator />
      <TextStyled>
        <b>
          Cumplimenta todos los campos del formulario. Es muy importante que lo
          hagas correctamente. Una vez cumplimentados pulsa el boton "Enviar"
        </b>
      </TextStyled>
      <TextStyled>
        *Importante, la cuota para hacerse socio es de 25 euros al año
      </TextStyled>
    </div>
  );
};
