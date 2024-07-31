import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 40px; 
  background-color: #131F29;
  color: #ffffff;
`;

export const TextContainer = styled.div`
  max-width: 800px;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: left;
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;

  b {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
