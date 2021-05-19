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

const SubtitleStyled = styled.h2`
  text-align: center;
  margin: 20px 100px;
`;

const TextStyled = styled.p`
  text-align: center;
  margin: 20px 60px;
`;

const TextStyled2 = styled.p`
  text-align: flex-start;
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
    <DivFullsize>
      <TitleStyled>Ruta en solitario, un viaje por España</TitleStyled>
      <ImageStyled src="/cesar-gironella.jpg" alt="ImageRuta" height="500px" />
      <SubtitleStyled>César Gironella</SubtitleStyled>
      <Separator />
      <SubtitleStyled>1.500 kilómetros en tres etapas:</SubtitleStyled>
      <TextStyled>
        1. Murcia - Valdecabras ( Cuenca)
        <br /> 2. Valdecabras - Valdenebro ( Soria)
        <br /> 3.Valdenebro - Segovia - Murcia
      </TextStyled>
      <TextStyled2>
        Un maravilloso viaje en mi Maxsym 400 i con rutas planificadas pero
        dejándome llevar por la ley del asfalto; rodar y ver qué pasa. Parar
        donde algo te llame la atención, pensar en mil cosas, mirar a la
        carretera y a las nubes, incluso a veces hablando en voz alta, allá
        dentro del casco que, en ruta, es lo más parecido a estar en casa.
        <br />
        He atravesado la serranía de Cuenca por caminos forestales de
        interminables sube y bajas y curvas infinitas en un paisaje
        impresionante de bosques y aguas cristalinas (ciervos y truchas a la
        vista). He recorrido autopistas cargadas de tráfico de veraneantes,
        circunvalaciones de Madrid por el noroeste, rectas interminables
        atravesando viñedos en La Mancha cargados de uvas presintiendo la
        vendimia de Septiembre. Bares de carretera en las que un bocadillo de
        lomo y una cerveza debajo de un árbol junto a la moto, mientras el tubo
        de escape se enfría emitiendo pequeños crujidos, es un manjar de dioses
        También café para entrar en calor rodando poco después del amanecer.
        Gasolineras que, en ruta, son como la embajada de tu país en el
        extranjero... Y sol, y calor, todo el sol del mundo.
        <br />
        La moto maravillosa. Muchas horas seguidas con las paradas de rigor a
        repostar, tanto ella como yo, y no he sentido incomodidad ni cansancio
        fuera de lo normal a pesar de que no es lo mismo conducir en autovía que
        por estas carreteras que te piden un esfuerzo mayor. Es segura, y
        fiable. A mi me gusta conducir tranquilo, cuando me doy cuenta de que me
        estoy animando demasiado, reduzco la velocidad.. 120 - 130 te llevan a
        cualquier parte disfrutando. Mi mochila, sujeta con pulpos en el asiento
        de atrás y colocada de manera que funcione como un pequeño respaldo
        riñonero fue una gran idea.
      </TextStyled2>
    </DivFullsize>
  );
};
