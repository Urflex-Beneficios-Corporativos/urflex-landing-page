import styled from "styled-components";

export const TeamStyled = styled.section`
    background-color: var(--default-color-green);
    display: flex;
    width: 100%;
    height: 100vh;
    flex: 1;
    flex-direction: column;
    padding: 150px 10% 100px 10%;

`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
 
`;

export const ButtonStyled = styled.button`
  padding: 15px;
  font-size: 1.5em;
  border: 1px solid var(--default-color-orange);
  border-radius: 10px;
  color: #fff;
  transition: filter 0.3s linear;
  width: 25%;
  font-Weight: 500;
  background-color: transparent;

  &.selected{
        border-color: transparent;
        background-color: var(--default-color-orange);
  }  
`;

export const PersonContainer = styled.div`
    display: none;
    height: 100%;
    justify-content: center;
    gap: 20px;
    padding: 25px 0;

    &.selected{
    display: flex;
  }  
`;