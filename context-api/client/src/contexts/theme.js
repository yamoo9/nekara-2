import { createContext, useContext, useMemo, useState } from 'react';
import { getColor, getPrimaryColor } from 'styles/utils';

/* -------------------------------------------------------------------------- */
/* Theme                                                                      */
/* -------------------------------------------------------------------------- */

const theme = {
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
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const ThemeContext = createContext();

/* -------------------------------------------------------------------------- */
/* Context.Provider Wrapper                                                   */
/* -------------------------------------------------------------------------- */

export const ThemeProvider = (props) => {
  const [mode, setMode] = useState('light');

  const value = useMemo(
    () => ({
      theme: {
        mode,
        ...theme[mode],
      },
      toggleTheme() {
        mode === 'light' ? setMode('dark') : setMode('light');
      },
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value} {...props} />;
};

/* -------------------------------------------------------------------------- */
/* Custom Hook                                                                */
/* -------------------------------------------------------------------------- */

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme 훅은 Theme Context 안에서만 사용 가능합니다.');
  }
  return context;
};
