import { useState } from 'react';
import { string } from 'prop-types';
import { NavigationItemsType } from './Navigation.types';
import { Container, List, Item, Link } from './Navigation.styled';
import { A11yHidden } from 'components';

export function Navigation({
  id = 'global-navigation',
  label = '글로벌 내비게이션',
  items: initialItems = [],
}) {
  const [items] = useState(initialItems);

  return (
    <Container aria-labelledby={id}>
      <A11yHidden as="h2" id={id}>
        {label}
      </A11yHidden>
      <List>
        {items.map((item) => (
          <Item key={item.text}>
            <Link to={item.to}>{item.text}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}

Navigation.propTypes = {
  id: string,
  label: string,
  items: NavigationItemsType,
};
