import React, { useState } from 'react';
import './question-card.css';

function QuestionCard({ question, answer }){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="question-card">
            <div className='question' onClick={toggleVisibility}>
                <h4>{ question }</h4>
                <div className={`plus ${isVisible?'turn':''}`}>+</div>
            </div>
            <div className={`answer ${isVisible?'show':'hidden'}`}>                
                <p>{ answer }</p>
            </div>
        </div>
    );
};

export default QuestionCard;
