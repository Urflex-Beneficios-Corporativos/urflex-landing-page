import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #131F29;
  color: #ffffff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 998;
  transition: all 0.5s;
  border-bottom: 1px solid #FDFEFE;

  @media (max-width: 768px) {
    position: fixed;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  max-height: 85px;
  margin-right: 20px;
`;

export const NavMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0 400px 0 0;
    margin: 0;
    height: 100%;
  }

  li {
    margin: 0 15px;
  }

  @media (min-width: 768px) {}

  @media (max-width: 768px) {
    display: ${props => (props.isMobileNavActive ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dark-blue);
    z-index: 997;
    padding-top: 60px;

    ul {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 0;
      width: 100%;
    }

    ul li:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

    li {
      margin: 0;
      width: 100%;
    }
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.905);
  text-decoration: none;
  font-size: 16px;
  padding: 18px 15px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #EB3E1B;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 15px 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
  }
`;

export const MobileNavToggle = styled.div`
  display: none;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.905);
  cursor: pointer;
  z-index: 999;

  @media (max-width: 768px) {
    display: initial;
  }
`;

export const GetStartedButton = styled.a`
  background-color: var(--primary-orange);
  color: #ffffff;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-orange);
  }
    @media (max-width: 768px) {
      display: none;
    }
}
`;