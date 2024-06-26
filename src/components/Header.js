import React, { useState } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../Logo (1).png';

const StyledHeader = styled.header`
  background-color: #131F29;
  color: #ffffff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 997;
  transition: all 0.5s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  max-height: 85px;
  margin-right: 20px;
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0 15px;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.905);
  text-decoration: none;
  font-size: 16px;
  padding: 18px 15px;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: #EB3E1B;
  }
`;

const MobileNavToggle = styled.div`
  display: none;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.905);
  cursor: pointer;
  @media (max-width: 1199px) {
    display: block;
  }
`;

const GetStartedButton = styled.a`
  background-color: #EB3E1B;
  color: #ffffff;
  padding: 8px 30px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d93b1b;
  }
  @media (max-width: 1200px) {
    padding: 6px 15px;
    margin-left: 15px;
  }
`;

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active', !isMobileNavActive);
  };



  const scrollToHome = () => {
    scroll.scrollTo(1, {
      duration: 1, // Ajuste a duração da rolagem para a seção "Home"
    });
  };
  
  const scrollToProposta = () => {
    scroll.scrollTo(620, {
      duration: 1, // Ajuste a duração da rolagem para a seção "Home"
    });
  };

  return (
    <StyledHeader>
      <Container>
        <Logo onClick={() => scroll.scrollToTop()}>
          <LogoImage src={logo} alt="Logo" />
        </Logo>
        <NavMenu className={isMobileNavActive ? 'mobile-nav-active' : ''}>
          <ul>
            <li><NavLink onClick={scrollToHome}>Home</NavLink></li>
            <li><NavLink onClick={scrollToProposta}>Propostas</NavLink></li>
            <li><NavLink to="services" smooth={true} duration={500}>Sobre nós</NavLink></li>
            <li><NavLink to="contact" smooth={true} duration={500}>Contatos</NavLink></li>
          </ul>
        </NavMenu>
        <MobileNavToggle onClick={toggleMobileNav} />
        <GetStartedButton>Obter E-book</GetStartedButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;


