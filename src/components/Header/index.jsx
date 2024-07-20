import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { StyledHeader, Container, Logo, LogoImage, NavMenu, NavLink, MobileNavToggle, GetStartedButton } from './styles';

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active', !isMobileNavActive);
  };

  return (
    <StyledHeader>
      <Container>
        <Logo onClick={() => scroll.scrollToTop()}>
          <LogoImage src={logo} alt="Logo" />
        </Logo>
        <NavMenu className={isMobileNavActive ? 'mobile-nav-active' : ''}>
          <ul>
            <Link to="/" style={{textDecoration: 'none'}}>
              <li>
                <NavLink>
                  Home
                </NavLink>
              </li>
            </Link>
            <li>
              <NavLink>
                Sobre Nós
              </NavLink>
            </li>
            <Link to="/team" style={{textDecoration: 'none'}}>
              <li>
                <NavLink>
                  Nosso Time
                </NavLink>
              </li>
            </Link>
          </ul>
        </NavMenu>
        <MobileNavToggle onClick={toggleMobileNav} />
        <GetStartedButton>Obter E-book</GetStartedButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
