import React from 'react';
import cardImage from '../../assets/cards.png';
import { Element } from 'react-scroll';
import { HeroSection, BackgroundImage, Container, TextContent, Title, Description, Image } from './styles';

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

