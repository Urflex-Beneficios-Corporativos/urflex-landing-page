import React from 'react';
import QuestionCard from './FAQCard';
import Plans from '../../assets/plans.png';
import faqs from './faqs.json';
import { FAQContainerStyled, TitleStyled } from './styles';

const imageMap = {
    'plans': Plans,
};

function FAQContainer() {

    const updatedFaqs = faqs.map(faq => ({ //adiciona a imagem importada ao container das respostas
        ...faq,
        answer: faq.answer.map(paragraph =>
            paragraph.replace(/\${'plans'}/g, imageMap['plans'])
        )
    }));

    return (
        <FAQContainerStyled>
            <TitleStyled>Dúvidas frequentes</TitleStyled>
            {updatedFaqs.map(faq => (
                <QuestionCard
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </FAQContainerStyled>
    );
}

export default FAQContainer;
