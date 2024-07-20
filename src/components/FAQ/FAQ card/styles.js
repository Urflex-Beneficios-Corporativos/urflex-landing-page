import styled from 'styled-components';

export const QuestionCardStyled = styled.div`
  width: 50%;
  box-shadow: 0px 4px 4px #0000007f;
  cursor: pointer;
  height: max-content;
  transition: filter 0.3s linear;

  &:hover {
    filter: contrast(1.02);
  }

  @media (max-width: 600px) {
    width: 90%;
    height: max-content;
  }
`;

export const QuestionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: var(--default-color-darkgreen);
`;

export const AnswerStyled = styled.div`
  background-color: rgb(26, 39, 49);
  padding: 0;
  overflow: hidden;
  max-height: 0px;
  transition: max-height 0.3s ease-in-out 0.1s;
  display: flex;
  justify-content: center;
  align-items: start;

  &.show {
    max-height: 1000px;
  }
  
  & img{
  width: 100%;
  padding: 0 10%;
  }

  &.hidden {
    max-height: 0px;
  }
`;

export const AnswerTextStyled = styled.p`
  overflow-y: auto;
  padding: 15px;
`;

export const PlusStyled = styled.div`
  color: var(--default-color-orange);
  transform: scale(3);
  transition: transform 0.3s linear 0.1s;

  &.turn {
    transform: rotate(45deg) scale(3);
  }
`;