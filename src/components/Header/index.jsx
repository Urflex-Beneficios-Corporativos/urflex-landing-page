import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import { StyledHeader, Container, Logo, LogoImage, NavMenu, NavLink, MobileNavToggle, GetStartedButton } from './styles';

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active', !isMobileNavActive);
  };

  const scrollToHome = () => {
    scroll.scrollTo(0, {
      duration: 1,
    });
  };

  const scrollToProposta = () => {
    scroll.scrollTo(620, {
      duration: 1,
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
            <li><NavLink to="services" smooth={true} duration={500}>Sobre Nós</NavLink></li>
            <li><NavLink to="team" smooth={true} duration={500}>Nosso Time</NavLink></li>
          </ul>
        </NavMenu>
        <MobileNavToggle onClick={toggleMobileNav} />
        <GetStartedButton>Obter E-book</GetStartedButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
