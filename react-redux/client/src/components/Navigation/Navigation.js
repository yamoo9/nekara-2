import { useState /* , useCallback */ } from 'react';
// import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
import { NavigationItemsType } from './Navigation.types';
import {
  Container,
  List,
  Item,
  Link /* , SignOut */,
} from './Navigation.styled';
import { A11yHidden } from 'components';

export function Navigation({
  id = 'global-navigation',
  label = '글로벌 내비게이션',
  items: initialItems = [],
}) {
  const [items] = useState(initialItems);
  // const navigate = useNavigate();

  // const handleSignOut = useCallback(() => {
  //   navigate('/');
  // }, [navigate]);

  return (
    <Container aria-labelledby={id}>
      <A11yHidden as="h2" id={id}>
        {label}
      </A11yHidden>
      <List>
        {items.map((item) => {
          // let isAuthAndSignIn = authUser && item.to.includes('signin');
          return (
            <Item key={item.text}>
              <Link to={item.to}>{item.text}</Link>
              {/* {!isAuthAndSignIn ? (
                <Link to={item.to}>{item.text}</Link>
              ) : (
                <SignOut type="button" onClick={handleSignOut}>
                  로그아웃
                </SignOut>
              )} */}
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

Navigation.propTypes = {
  id: string,
  label: string,
  items: NavigationItemsType,
};
