import styled from "styled-components";

const DivFullsize = styled.div`
  width: 100%;
`;

const TitleStyled = styled.h1`
  text-align: center;
  font-weight: bold;
  margin: 10px;
  margin-bottom: 50px;
`;

const ImageStyled = styled.img`
  display: block;
  float: left;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Separator = styled.hr`
  margin: 50px 100px;
`;

const TextStyled = styled.p`
  float: right;
  margin: 20px 60px;
  justify-content: 10px;
`;

export default () => {
  return (
    <DivFullsize>
      <TitleStyled>Ruta Parque Natural Valderejo</TitleStyled>
      <Separator />
      <TextStyled>
        <ImageStyled src="/ruta2.jpg" alt="ImageRuta" height="300px" />
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </TextStyled>
    </DivFullsize>
  );
};
