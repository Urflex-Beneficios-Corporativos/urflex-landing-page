import React from 'react';
import { Container, TextContainer, Title, Description } from './styles';

const AboutUs = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Qual é a nossa história?</Title>
        <Description>
          A Urflex Benefícios Corporativos nasceu de uma necessidade real que vivenciamos diariamente. Em conversas com diversos funcionários, percebemos que muitos enfrentavam dificuldades no deslocamento urbano, seja pelo tempo gasto, custos elevados ou pela falta de opções acessíveis e convenientes. Essa dor compartilhada nos motivou a criar uma solução que não só <b>melhorasse a qualidade de vida dos funcionários</b>, mas também <b>facilitasse a gestão de benefícios pelas empresas</b>.
          <br /><br />
          Estamos ainda no início da nossa trajetória, mas carregamos conosco uma determinação inabalável para fazer a diferença. Acreditamos que proporcionar uma mobilidade urbana eficiente e acessível pode transformar a rotina das pessoas, tornando o dia a dia mais leve e produtivo.
          <br /><br />
          Nossa jornada tem sido impulsionada por importantes iniciativas e reconhecimentos que nos dão suporte e confiança. A bolsa <b>Empreende UFC 2024</b> está sendo um marco significativo, permitindo-nos desenvolver nosso projeto com mais recursos e orientação especializada. Além disso, o <b>Desafio Liga Jovem 2024 SEBRAE</b> foi uma grande oportunidade para gerar visibilidade para nossa ideia e validar nosso protótipo.
          <br /><br />
          Cada passo dado é um avanço na direção de um futuro onde a mobilidade urbana seja sinônimo de praticidade e bem-estar. Convidamos você a fazer parte dessa transformação com a Urflex Benefícios Corporativos. Juntos, vamos tornar o deslocamento urbano mais simples, eficiente e agradável para todos.
        </Description>
      </TextContainer>
    </Container>
  );
};

export default AboutUs;
