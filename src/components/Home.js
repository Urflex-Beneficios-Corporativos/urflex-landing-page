import React from 'react';
import styled from 'styled-components';
import cardImage from '../Frame 2.png';
import { Element } from 'react-scroll';

const HeroSection = styled.section`
  --default-color: #ffffff;
  --background-color: #131F29;
  --heading-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 44px;
  font-family: var(--default-font);
  margin-top: 150px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-right: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  margin-top: 55px;
  margin-left: 99px;
  transition: transform 0.5s ease, filter 0.5s ease;
  &:hover {
    transform: perspective(1000px) rotateY(-10deg) scale(1.3);
    filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.5));
  }
`;

const Home = () => {
  return (
    <Element name="home">
      <HeroSection>
        <Container>
          <TextContent>
            <Title>Chegar ao seu trabalho nunca foi tão fácil</Title>
            <Description>Ofereça mais conforto e praticidade no trajeto diário com nosso cartão de benefícios exclusivo para mobilidade urbana.</Description>
          </TextContent>
          <Image src={cardImage} alt="Imagem do cartão" />
        </Container>
      </HeroSection>
    </Element>
  );
};

export default Home;



