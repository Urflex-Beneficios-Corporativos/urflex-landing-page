import styled, { keyframes } from 'styled-components';
import linesImage from '../../assets/lines.png';

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeroSection = styled.section`
  --default-color: #ffffff;
  --background-color: #131F29;
  --heading-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
  position: relative;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  width: 100%;
  height: 100%;
  background-image: url(${linesImage});
  background-size: cover;
  background-position: center;
  z-index: 1;
  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-top: 130px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  animation: ${fadeInLeft} 1s ease-out;

  @media (min-width: 768px) {
    text-align: left;
    order: 1;
  }
`;

export const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 44px;
  font-family: 'Roboto', sans-serif;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
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

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    width: 300px;
    transform: none !important;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    order: 2;
  }
`;