import React from 'react';
import urflexLogo from '../assets/urflex_logo.png';
import emailImg from '../assets/email.png';
import instagramImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';
import { FooterStyled, ParagraphStyled, EmailContainerStyled, InputStyled, ButtonStyled, SocialStyled, CopyrightStyled } from './styles';

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
