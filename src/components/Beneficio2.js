import React from 'react';
import styled from 'styled-components';
import cardImage from '../images/cartao.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 10px; 
  background-color: #ffffff; 
  color: #222120; 
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 60px; 
  margin-right: 40px; 
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: left;
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: left;
`;

const Image = styled.img`
  max-width: 450px;
  margin-left: 20px; 
  margin-right: 50px; 
`;

const Beneficio2 = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Title>Deslocamento sem complicações para você e seu time.</Title>
          <Description>Com o nosso cartão de benefícios, será possível ir até seu local de trabalho tranquilamente, evitando os estresses diários tão comuns em meios urbanos.</Description>
        </TextContainer>
        <Image src={cardImage} alt="Imagem do cartão" />
      </ContentContainer>
    </Container>
  );
};

export default Beneficio2;
