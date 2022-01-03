import 'styled-components/macro';
import { useRef, useState, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { number } from 'prop-types';

import { Container, Wrapper } from './Layout.styled';
import { useTheme } from 'contexts';
import { Header } from 'components';

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export default function Layout({ offset }) {
  const { theme } = useTheme();

  const headerRef = useRef(null);

  let [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    let { height } = headerRef.current.getBoundingClientRect();
    setHeaderHeight(`${height + offset}px`);
  }, [offset]);

  return (
    <Container theme={theme}>
      <Header ref={headerRef} theme={theme} />
      <Wrapper
        as="main"
        css={`
          min-height: 100vh;
          padding-top: ${headerHeight};
        `}
      >
        <Outlet />
      </Wrapper>
    </Container>
  );
}

Layout.defaultProps = {
  offset: 20,
};

Layout.propTypes = {
  offset: number,
};
