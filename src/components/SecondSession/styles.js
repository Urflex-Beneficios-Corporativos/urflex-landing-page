import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 10px; 
  background-color: #ffffff;
  color: #222120; 
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 60px; 
  margin-right: 40px; 
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: left;
`;

export const Image = styled.img`
  max-width: 450px;
  margin-left: 20px; 
  margin-right: 50px; 
`;