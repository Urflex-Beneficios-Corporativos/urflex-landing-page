import React from 'react';
import styled from 'styled-components';

import { MoneyWavy, RoadHorizon, Bus } from "@phosphor-icons/react";

const StyledSection = styled.section`
   --default-color: #444444;
   --contrast-color: #312f2f; 
   --accent-color: #EB3E1B;
`;

const Container = styled.div`
   margin-top: 79px;
   margin-bottom: 79px;
`;

const ServiceItem = styled.div`
  text-align: center;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
  padding: 82px 59px 67px 58px;
  height: 100%;
  transition: all ease-in-out 0.3s;
  border-radius: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    box-shadow: 0px 0 25px 0 color-mix(in srgb, var(--default-color), transparent 92%);
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    text-align: left; /* Alinha o texto à esquerda em telas menores */
  }
`;

const IconStyled = styled.div`
  color: var(--contrast-color);
  margin: 0 auto;
  width: 64px;
  border-radius: 4px;
  margin-left: -10px;
  margin-bottom: 20px;
  transition: 0.3s;

  i, svg {
    font-size: 64px;
    transition: ease-in-out 0.3s;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  display: flex;
  margin-left: -10px;
  font-size: 22px;
  transition: 0.3s;
  color: #222120;
`;

const TitleContainer = styled.div`
  margin-top: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.p`
  font-size: 18px;
  margin-left: -10px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const Proposta = () => {
    return (
        <StyledSection id="services" className="services section">
            <Container className="container title" data-aos="fade-up">
                <TitleContainer>
                    <h2>Por que o caminho até o trabalho faz toda a diferença?</h2>
                    <p>Conheça as vantagens do nosso produto e ofereça um deslocamento sem complicações para o seu time.</p>
                </TitleContainer>
            </Container>
            <Container className="container">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6" >
                        <ServiceItem className="service-item position-relative">
                            <IconStyled>
                                <RoadHorizon size={64} color="#EB3E1B" />
                            </IconStyled>
                            <a>
                                <Title>Conforto e praticidade</Title>
                            </a>
                            <Description>Garanta um trajeto mais agradável para os seus funcionários.</Description>
                        </ServiceItem>
                    </div>
                    <div className="col-lg-4 col-md-6" >
                        <ServiceItem className="service-item position-relative">
                            <IconStyled>
                                <MoneyWavy size={64} color="#EB3E1B" />
                            </IconStyled>
                            <a>
                                <Title>Economia</Title>
                            </a>
                            <Description>Reduza os custos de transporte e aumente a satisfação da sua equipe.</Description>
                        </ServiceItem>
                    </div>
                    <div className="col-lg-4 col-md-6" >
                        <ServiceItem className="service-item position-relative">
                            <IconStyled>
                                <Bus size={64} color="#EB3E1B" />
                            </IconStyled>
                            <a>
                                <Title>Flexibilidade</Title>
                            </a>
                            <Description>Utilize o nosso cartão em diversos meios de transporte.</Description>
                        </ServiceItem>
                    </div>
                </div>
            </Container>
        </StyledSection>
    );
};

export default Proposta;



