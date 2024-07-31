import styled from "styled-components";

export const TeamStyled = styled.section`
    background-color: var(--primary-blue);
    display: flex;
    width: 100%;
    min-height: 100dvh;
    flex: 1;
    flex-direction: column;
    padding: 150px 10% 100px 10%;

    @media(max-width: 1024px){
      position: relative;
      padding: 150px 0 50px 0;
      height: max-content;
      overflow-x: hidden;
    }

`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    scale: 0.9;
 
`;

export const ButtonStyled = styled.button`
  padding: 15px;
  font-size: 1.5em;
  border: 1px solid var(--primary-orange);
  border-radius: 10px;
  color: #fff;
  transition: filter 0.3s linear;
  width: 25%;
  font-Weight: 500;
  background-color: transparent;

  &:hover{
    background: var(--primary-orange);
  }

  &.selected{
        border-color: transparent;
        background-color: var(--primary-orange);
  }
    @media(max-width: 600px){
        padding: 5px;
        font-size: 1em;
        border-radius: 5px;
        width: 30%;
        font-Weight: 500;
    } 
`;

export const PersonContainer = styled.div`
    display: none;
    height: 100%;
    justify-content: center;
    gap: 20px;
    padding: 25px 0;
    transition: 0.5s transform ease-in-out;

    &.selected{
      display: flex;
    }    
    
    @media(max-width: 600px){
      width: max-content;
      justify-content: start;
      gap: 0;
      padding: 0;

      transform: ${({ translateX }) => `translateX(${translateX}vw)`};
    }
    @media(max-width: 1024px){
      width: max-content;
      justify-content: start;
      gap: 0;
      padding: 0;

      transform: ${({ translateX }) => `translateX(${translateX}vw)`};
    }
`;


export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 50;
  background-color: transparent;
  display: none;
  border: none;

  width: 30px;
  height: 30px;
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: none;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    transform: translateX(-60%) rotate(45deg);
    cursor: pointer;
  }
  &.hidden{
    display: none;
  }
  &:active {
    opacity: 0.5;
    animation: moveR 0.1s linear 0s backwards;
  }
  
  @keyframes moveR {
      from{transform: translateX(0);}
      to{transform: translateX(10px);}
  }

  @media(max-width: 600px){
    display: inline-block;

    &::before {
      display: block;
    }
  }
  @media(max-width: 1024px){
    display: inline-block;

    &::before {
      display: block;
    }
  }
`;
export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 50;
  background-color: transparent;
  display: none;
  border: none;

  width: 30px;
  height: 30px;
  overflow: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hidden{
    display: none;
  }

  &::before {
    content: '';
    display: none;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    transform: translateX(60%) rotate(45deg);
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
    animation: moveL 0.1s linear 0s backwards;
  }

  @media(max-width: 600px){
    display: inline-block;

    &::before {
      display: block;
    }
  }
  @media(max-width: 1024px){
    display: inline-block;

    &::before {
      display: block;
    }
  }
  
  @keyframes moveL {
      from{transform: translateX(0);}
      to{transform: translateX(-10px);}
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: none;

  @media(max-width: 600px){
    display: flex;
  }
  @media(min-width: 600px) and (max-width: 1024px){
    display: flex;
  }
`;

export const Dot = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;

  &:active{
    background-color: orange;
  }
  
  &.show{
    background-color: #fff;
  }

  &:focus {
    outline: none;
  }
`;