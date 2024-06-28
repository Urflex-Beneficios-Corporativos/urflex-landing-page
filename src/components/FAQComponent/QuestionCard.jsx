import React, { useState } from 'react';
import './QuestionCard.css';

function QuestionCard({ question, answer }){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="question-card" onClick={toggleVisibility}>
            <div className='question'>
                <h4>{ question }</h4>
                <span className='plus'>{isVisible?'-':'+'}</span>
            </div>
            <div className={`answer ${isVisible?'show':'hidden'}`}>                
                <p>{ answer }</p>
            </div>
        </div>
    );
};

export default QuestionCard;
