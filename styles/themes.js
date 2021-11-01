import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#1c1c1c',
  borderColor: '#00ba34',
};

export const darkTheme = {
  body: '#1c1c1c',
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
