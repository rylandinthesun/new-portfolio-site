import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#121212',
  borderColor: '#121212',
};

export const darkTheme = {
  body: '#121212',
  fontColor: '#fff',
  borderColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

    body {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};
		  border-color: ${(props) => props.theme.borderColor}
    }
`;
