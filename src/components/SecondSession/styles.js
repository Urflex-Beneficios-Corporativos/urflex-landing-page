import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 10px; 
  background-color: #ffffff;
  color: #222120; 

  @media (max-width: 768px) {
    padding: 90px 0px;
  }

`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const TextContainer = styled.div`
  order: 1; 
  flex: 1;
  text-align: justify;
  margin-left: 60px; 
  margin-right: 40px; 

  @media (max-width: 768px) {
    order: 2; 
    margin: 0 0;
    text-align: center;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    
    .highlight {
      color: #EB3E1B;
      }
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const Image = styled.img`
  order: 2; 
  max-width: 500px;
  margin-left: 20px; 
  margin-right: 50px; 

  @media (max-width: 768px) {
    order: 1; 
    margin: 0 auto 20px auto;
    width: 100%;
    max-width: 300px;
  }
`;