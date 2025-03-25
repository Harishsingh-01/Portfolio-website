import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.text};
    --primary: #0ef;
    --secondary: ${({ theme }) => theme.secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
  }
`;

export const lightTheme = {
  background: '#ffffff',
  text: '#1f1f1f',
  secondary: '#f0f0f0',
};

export const darkTheme = {
  background: '#1f1f1f',
  text: '#ffffff',
  secondary: '#2d2d2d',
}; 