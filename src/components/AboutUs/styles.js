import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 40px; 
  background-color: #131F29;
  color: #ffffff;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  max-width: 800px;
  text-align: justify;
  height: 100%;

  @media (max-width: 768px) {
    text-align: left;
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
