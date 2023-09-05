import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: blue;
  padding: 20px;
`;

export const NavList = styled.nav`
  background-color: #edf3fb;
  ul {
    display: flex;
    gap: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
