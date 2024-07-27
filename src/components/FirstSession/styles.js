import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  background-color: #131F29;
  color: #ffffff;

 @media (max-width: 768px) {
    padding: 90px 0px;
  }

`;

export const LinesImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 40px; 
  margin-right: 40px; 
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;

  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const Image = styled.img`
   
  max-width: 450px;
  margin-left: 100px; 
  margin-right: 50px; 
  
  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
    width: 100%;
    max-width: 300px;
  }
`;
