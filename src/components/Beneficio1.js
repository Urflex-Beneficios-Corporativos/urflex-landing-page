import React from 'react';
import styled from 'styled-components';
import comfortImage from '../images/conforto.png';
import linesImage from '../images/linhas.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px; 
  background-color: #131F29;
  color: #ffffff;
`;

const LinesImage = styled.img`
  width: 100%;
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
  margin-left: 40px; 
  margin-right: 60px; 
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
  margin-left: 100px;
  margin-right: 20px; 
  
`;

const Beneficio1 = () => {
  return (
    <Container>
      <LinesImage src={linesImage} alt="Linhas decorativas" />
      <ContentContainer>
        <Image src={comfortImage} alt="Imagem de conforto" />
        <TextContainer>
          <Title>Aumente a <span style={{ color: '#EB3E1B' }}>satisfação</span> e a <span style={{ color: '#EB3E1B' }}>produtividade</span> de seus funcionários.</Title>
          <Description>Nossas soluções garantem total conforto do funcionário durante seu trajeto, fazendo com que ele esteja totalmente apto para o seu serviço.</Description>
        </TextContainer>
      </ContentContainer>
      <LinesImage src={linesImage} alt="Linhas decorativas" />
    </Container>
  );
};

export default Beneficio1;
