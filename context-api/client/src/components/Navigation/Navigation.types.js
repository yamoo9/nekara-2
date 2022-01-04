import { string, arrayOf, exact, bool } from 'prop-types';

export const NavigationItemsType = arrayOf(
  exact({
    text: string,
    to: string,
    isAuthRequired: bool,
    alwaysDisplay: bool,
  })
);
