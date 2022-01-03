import { useState } from 'react';
import { ThemeProvider, theme as initialTheme } from 'contexts/theme.styled';
import { Button, Headline, Paragraph, StyledWrapper } from './styled';

/* -------------------------------------------------------------------------- */
/* StyledComponentThemeDemo                                                   */
/* -------------------------------------------------------------------------- */

export default function StyledComponentThemeDemo(props) {
  const [theme, setTheme] = useState(initialTheme.light);

  let isLightTheme = theme.color === initialTheme.light.color;

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper lang="en">
        <Headline>Styled Components Theme Demo</Headline>
        <Paragraph>
          A helper component for theming. Injects the theme into all styled
          components anywhere beneath it in the component tree, via the context
          API. Check the section on Theming.
        </Paragraph>
        <Button
          type="button"
          onClick={() => {
            if (isLightTheme) {
              setTheme(initialTheme.dark);
            } else {
              setTheme(initialTheme.light);
            }
          }}
        >
          {isLightTheme ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </StyledWrapper>
    </ThemeProvider>
  );
}
