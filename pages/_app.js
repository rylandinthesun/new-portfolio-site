import { useState } from 'react';
import Layout from '../layout/Layout';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/themes';

import '../styles/globals.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <Layout themeSwitcher={themeToggler}>
          <Component {...pageProps} />
        </Layout>
      </StyledApp>
    </ThemeProvider>
  );
}

export default MyApp;
