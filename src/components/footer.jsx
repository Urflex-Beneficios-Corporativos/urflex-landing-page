import React from 'react';
import styled from 'styled-components';
import urflexLogo from '../assets/urflex_logo.png';
import emailImg from '../assets/email.png';
import instagramImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';

const FooterStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--default-color-grey);
  width: 100%;
  height: max-content;
  padding: 25px 0;
`;

const ParagraphStyled = styled.p`
  color: #fff;
  margin-top: 10px;
  text-align: center;
`;

const EmailContainerStyled = styled.form`
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

const InputStyled = styled.input`
  border: none;
  padding: 8px;
  border-radius: 5px;
  width: 50%;
  max-width: 300px;
`;

const ButtonStyled = styled.button`
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

const SocialStyled = styled.div`
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

const CopyrightStyled = styled.div`
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

function Footer() {
  const submit = async (e) => {
    e.preventDefault();
    // Adicione a lógica de envio do formulário aqui
  };

  return (
    <FooterStyled>
      <ParagraphStyled>Insira seu E-mail para ficar por dentro das principais novidades da Urflex!</ParagraphStyled>
      <EmailContainerStyled onSubmit={submit}>
        <InputStyled
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu melhor E-mail"
        />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </EmailContainerStyled>
      <SocialStyled>
        <a href="mailto:urflex.app@gmail.com">
          <img src={emailImg} alt="email" />
        </a>
        <a href="https://www.instagram.com/urflexbeneficios">
          <img src={instagramImg} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/company/urflex-beneficios-corporativos">
          <img src={linkedinImg} alt="linkedin" />
        </a>
      </SocialStyled>
      <CopyrightStyled>
        <img src={urflexLogo} alt="" />
        <div>
          <p>Urflex all rights reserved.</p>
          <p>Urflex Benefícios Corporativos</p>
        </div>
      </CopyrightStyled>
    </FooterStyled>
  );
}

export default Footer;
