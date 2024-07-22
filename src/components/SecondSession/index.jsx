import React from 'react';
import cardImage from '../../assets/card.png';
import { Container, ContentContainer, Image, TextContainer, Title, Description } from './styles';

const SecondSession = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Title>
            Deslocamento <span className="highlight">sem complicações</span> para você e seu time.
          </Title>
          <Description>
            Com o nosso cartão de benefícios, será possível ir até seu local de trabalho tranquilamente, evitando os estresses diários tão comuns em meios urbanos.
          </Description>
        </TextContainer>
        <Image src={cardImage} alt="Imagem do cartão" className="card-image" />
      </ContentContainer>
    </Container>
  );
};

export default SecondSession;
