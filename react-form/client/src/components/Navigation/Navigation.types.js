import { string, arrayOf, exact } from 'prop-types';

export const NavigationItemsType = arrayOf(
  exact({
    text: string,
    to: string,
  })
);
