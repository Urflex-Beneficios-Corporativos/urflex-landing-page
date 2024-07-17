import React from 'react';
import styled, { keyframes } from 'styled-components';
import cardImage from '../Frame 2.png';
import { Element } from 'react-scroll';
import linesImage from './linhas.png';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroSection = styled.section`
  --default-color: #ffffff;
  --background-color: #131F29;
  --heading-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  margin-top:50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${linesImage});
  background-size: cover;
  background-position: center;
  z-index: 1;
  
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
  position: relative;
  z-index: 2;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  flex: 1;
  animation: ${fadeInLeft} 1s ease-out;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 44px;
  font-family: 'Roboto', sans-serif;
  margin-top: 150px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-right: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  margin-top: 55px;
  margin-left: 99px;
  transition: transform 0.5s ease, filter 0.5s ease;
  animation: ${fadeInRight} 1s ease-out;
  &:hover {
    transform: perspective(1000px) rotateY(-10deg) scale(1.3);
    filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.5));
  }
`;

const Home = () => {
  return (
    <Element name="home">
      <HeroSection>
        <BackgroundImage />
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

