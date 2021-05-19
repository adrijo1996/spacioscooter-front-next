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
      <TitleStyled>Contacta con nosotros</TitleStyled>
      <ImageStyled src="/contacto.jpg" alt="contacto" width="500px" />
      <TextStyled>
        En una relación la comunicación es vital, por ello nos gustaría que no
        tuvieses problemas en hablar con nosotros, escríbenos a nuestro correo
        electrónico si tienes cualquier tipo de duda o consulta, te
        responderemos lo antes posible. Si tienes alguna propuesta o
        recomendación no dudes tampoco en escribirnos aquí abajo.
      </TextStyled>
      <SubtitleStyled>info@grupomaxsym.es</SubtitleStyled>
    </div>
  );
};
