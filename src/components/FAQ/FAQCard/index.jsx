import React, { useState } from 'react';
import { QuestionCardStyled, QuestionStyled, Question, PlusStyled, AnswerStyled, AnswerTextStyled } from './styles';

function QuestionCard({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <QuestionCardStyled>
      <QuestionStyled onClick={toggleVisibility}>
        <Question>{question}</Question>
        <PlusStyled className={isVisible ? 'turn' : ''}>+</PlusStyled>
      </QuestionStyled>
      <AnswerStyled className={isVisible ? 'show' : 'hidden'}>
        {answer.map((paragraph, index) => (
          <AnswerTextStyled key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </AnswerStyled>
    </QuestionCardStyled>
  );
}

export default QuestionCard;
