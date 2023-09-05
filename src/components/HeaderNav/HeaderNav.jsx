import { HeaderContainer, NavLinkStyled, NavList } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <HeaderContainer>
      <NavList>
        <ul>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </li>
        </ul>
      </NavList>
    </HeaderContainer>
  );
};
