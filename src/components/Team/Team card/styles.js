import styled from "styled-components";

export const Person = styled.section`
    background-color: var(--default-color-darkgreen);
    width: 25%;
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    color: #fff;
`;

export const Image = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid var(--default-color-orange);
`;

export const Title = styled.h3`
    margin: 0;
    margin-top: 20px;
    font-Weight: 500;
    text-align: center;
`;

export const Role = styled.h5`
    margin: 0;
    padding: 0;
    font-style: italic;
    font-Weight: 200;
    opacity: 0.5;
    text-align: center;
`;

export const Description = styled.p`
    margin-top: 20px;
`;