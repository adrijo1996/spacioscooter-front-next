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
      <TitleStyled>Venta entre miembros</TitleStyled>
      <ImageStyled src="/venta.jpg" alt="venta" width="500px" />
      <Separator />
      <TextStyled>
        En Spacio Scooter nuestra prioridad son los miembros, por tanto este
        apartado es por y para ellos. Utiliza este apartado para publicar los
        artículos que quieras vender y para buscar gangas que comprar a tus
        compañeros motoristas.
      </TextStyled>
    </div>
  );
};
