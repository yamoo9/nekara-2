import { object } from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro';
import { getColor, getPrimaryColor } from 'styles/utils';

/* -------------------------------------------------------------------------- */
/* Theme                                                                      */
/* -------------------------------------------------------------------------- */

export const theme = {
  light: {
    background: getColor('white'),
    color: getPrimaryColor(500),
  },
  dark: {
    background: getPrimaryColor(500),
    color: getColor('white'),
  },
};

/* -------------------------------------------------------------------------- */
/* ThemeProvider                                                              */
/* -------------------------------------------------------------------------- */

export const ThemeProvider = ({ theme, ...restProps }) => {
  return <StyledThemeProvider theme={theme} {...restProps} />;
};

ThemeProvider.propTypes = {
  theme: object.isRequired,
};
