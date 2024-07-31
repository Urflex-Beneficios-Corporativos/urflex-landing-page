import React from 'react';
import urflexLogo from '../../assets/logo.png';
import { InstagramLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react"
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
          disabled
        />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </EmailContainerStyled>
      <SocialStyled>
        <a href="mailto:urflex.app@gmail.com" target='_blank'>
        < Envelope size={48} color='white' alt="E-mail"/>
        </a>
        <a href="https://www.instagram.com/urflexbeneficios" target='_blank'>
          <InstagramLogo size={48} color='white' alt="Instagram"/>
        </a>
        <a href="https://www.linkedin.com/company/urflex-beneficios-corporativos" target='_blank'>
          <LinkedinLogo size={48} color='white' alt="LinkedIn"/>
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
