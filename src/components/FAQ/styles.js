import styled from 'styled-components';

export const FAQContainerStyled = styled.div`
    color: #fff;
    background-color: #131F29;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    height: max-content;
    padding-bottom: 10%;
`;

export const TitleStyled = styled.h2`
    margin: 3%;
    font-size: 2.5rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;