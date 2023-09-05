import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import { Container } from './SharedLayout.styled';
import { HeaderNav } from '../HeaderNav/HeaderNav';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderNav>
        {/* <main> */}
        <Suspense fallback={<div>I am going to put loader here...</div>}>
          <Outlet />
        </Suspense>
        {/* </main> */}
      </HeaderNav>
    </Container>
  );
};
