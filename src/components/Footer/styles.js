import styled from 'styled-components';

export const FooterStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--default-color-grey);
  width: 100%;
  height: max-content;
  padding: 25px 0;
`;

export const ParagraphStyled = styled.p`
  color: #fff;
  margin-top: 10px;
  text-align: center;
`;

export const EmailContainerStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 25px;
  gap: 5px;
  width: 50%;

  @media (max-width: 600px) {
    width: 95%;
    input {
      padding: 5px;
    }
    button {
      padding: 5px 17px;
    }
  }
`;

export const InputStyled = styled.input`
  border: none;
  padding: 8px;
  border-radius: 5px;
  width: 50%;
  max-width: 300px;
`;

export const ButtonStyled = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--default-color-orange);
  color: #fff;
  transition: filter 0.3s linear;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SocialStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  width: 250px;
  margin: 80px 0;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const CopyrightStyled = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;

  p {
    font-size: small;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100px;
  }
`;