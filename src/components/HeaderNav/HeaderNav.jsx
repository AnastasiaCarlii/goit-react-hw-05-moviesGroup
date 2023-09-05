import { HeaderContainer, NavLink, NavList } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <HeaderContainer>
      <NavList>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </NavList>
    </HeaderContainer>
  );
};
