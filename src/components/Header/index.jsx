import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from "@phosphor-icons/react";
import { StyledHeader, Container, Logo, LogoImage, NavMenu, NavLink, MobileNavToggle, GetStartedButton } from './styles';

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  React.useEffect(() => {
    closeMobileNav();
  }, [location.pathname]);

  return (
    <StyledHeader>
      <Container>
        <Logo onClick={() => scroll.scrollToTop()}>
          <LogoImage src={logo} alt="Logo" />
        </Logo>
        <MobileNavToggle onClick={toggleMobileNav}>
          {isMobileNavActive ? <X size={32} /> : <List size={32} />}
        </MobileNavToggle>
        <NavMenu isMobileNavActive={isMobileNavActive}>
          <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NavLink style={{ color: location.pathname === '/' ? '#EB3E1B' : '#FDFEFE' }} onClick={closeMobileNav}>
                      Home
                    </NavLink>
                </Link>
              </li>
            <li>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <NavLink style={{ color: location.pathname === '/about' ? '#EB3E1B' : '#FDFEFE' }} onClick={closeMobileNav}>
                  Sobre Nós
                </NavLink>
              </Link>
            </li>
              <li>
                <Link to="/team" style={{ textDecoration: 'none' }}>
                  <NavLink style={{ color: location.pathname === '/team' ? '#EB3E1B' : '#FDFEFE' }} onClick={closeMobileNav}>
                    Nosso Time
                  </NavLink>
                </Link>
              </li>
                {/* <li>
                  <NavLink>
                    Obter E-book
                  </NavLink>
                </li> */}
          </ul>
        </NavMenu>
          {/* <GetStartedButton>
            Obter E-book
          </GetStartedButton> */}
      </Container>
    </StyledHeader>
  );
};

export default Header;
