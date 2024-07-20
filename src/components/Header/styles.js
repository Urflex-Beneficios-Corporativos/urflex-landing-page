import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #131F29;
  color: #ffffff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 997;
  transition: all 0.5s;
  border-bottom: 1px solid #FDFEFE;
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
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0 15px;
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
`;

export const MobileNavToggle = styled.div`
  display: none;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.905);
  cursor: pointer;
  @media (max-width: 1199px) {
    display: block;
  }
`;

export const GetStartedButton = styled.a`
  background-color: #EB3E1B;
  color: #ffffff;
  cursor: pointer;
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