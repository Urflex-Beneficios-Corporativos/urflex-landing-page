import React from 'react';
import comfortImage from '../../assets/comfort.png';
import linesImage from '../../assets/double_lines.png';
import { Container, ContentContainer, Image, LinesImage, TextContainer, Title, Description } from './styles';

const FirstSession = () => {
  return (
    <Container>
      <LinesImage src={linesImage} alt="Linhas decorativas" className="lines" />
      <ContentContainer>
        <Image src={comfortImage} alt="Imagem de conforto" className="comfort-image" />
        <TextContainer>
          <Title>Aumente a <span style={{ color: '#EB3E1B' }}>satisfação</span> e a <span style={{ color: '#EB3E1B' }}>produtividade</span> de seus funcionários.</Title>
          <Description>Nossas soluções garantem total conforto do funcionário durante seu trajeto, fazendo com que ele esteja totalmente apto para o seu serviço.</Description>
        </TextContainer>
      </ContentContainer>
      <LinesImage src={linesImage} alt="Linhas decorativas" className="lines" />
    </Container>
  );
};

export default FirstSession;
