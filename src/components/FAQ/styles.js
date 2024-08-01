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
    padding: 5% 0 10% 0;

    @media (max-width: 768px) {
        padding: 10% 0 20% 0;
    }
`;

export const TitleStyled = styled.h2`
    margin: 3%;
    font-size: 44px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;