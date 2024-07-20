import React from 'react';
import { MoneyWavy, RoadHorizon, Bus } from "@phosphor-icons/react";
import { StyledSection, Container, ServiceItem, IconStyled, Title, Description, TitleContainer } from './styles';

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



