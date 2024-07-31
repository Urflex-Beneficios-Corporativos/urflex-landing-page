import styled from 'styled-components';

export const StyledSection = styled.section`
   --default-color: #444444;
   --contrast-color: #312f2f; 
   --accent-color: #EB3E1B;
`;

export const Container = styled.div`
   margin-top: 79px;
   margin-bottom: 100px;
`;

export const MainTitle = styled.h2`
  font-size: 44px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const MainParagraph = styled.p`
  font-size: 22px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

export const ServiceItem = styled.div`
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
    text-align: center;
  }
`;

export const IconStyled = styled.div`
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

export const Title = styled.h3`
  font-weight: 768;
  display: flex;
  margin-left: -10px;
  font-size: 22px;
  transition: 0.3s;
  color: #222120;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 116px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-left: -10px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;