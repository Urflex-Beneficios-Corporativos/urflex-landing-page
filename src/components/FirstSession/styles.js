import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px; 
  background-color: #131F29;
  color: #ffffff;
`;

export const LinesImage = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 200px;
  width: 100%;
`;

export const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 40px; 
  margin-right: 60px;
  max-width: 600px;
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
  max-width: 500px; 
  margin-left: 100px;
  margin-right: 20px; 
  
`;