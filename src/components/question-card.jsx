import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionCardStyled = styled.div`
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

const QuestionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: var(--default-color-darkgreen);
`;

const AnswerStyled = styled.div`
  background-color: rgb(26, 39, 49);
  padding: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: start;

  &.show {
    height: 200px;
  }

  &.hidden {
    height: 0px;
  }
`;

const AnswerTextStyled = styled.p`
  overflow-y: auto;
  padding: 15px;
`;

const PlusStyled = styled.div`
  color: var(--default-color-orange);
  transform: scale(3);
  transition: transform 0.3s linear;

  &.turn {
    transform: rotate(45deg) scale(3);
  }
`;

function QuestionCard({ question, answer }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <QuestionCardStyled>
            <QuestionStyled onClick={toggleVisibility}>
                <h4>{question}</h4>
                <PlusStyled className={isVisible ? 'turn' : ''}>+</PlusStyled>
            </QuestionStyled>
            <AnswerStyled className={isVisible ? 'show' : 'hidden'}>
                <AnswerTextStyled>{answer}</AnswerTextStyled>
            </AnswerStyled>
        </QuestionCardStyled>
    );
}

export default QuestionCard;
