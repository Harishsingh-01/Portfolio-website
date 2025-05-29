import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  '--primary': '#3B3355',
  '--secondary': '#5D5D81',
  '--light-bg': '#FEFCFD',
  '--dark-bg': '#000505',
  '--light-text': '#FEFCFD',
  '--dark-text': '#000505',
  '--card-bg': '#BFCDE0',
  '--card-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
  '--gradient': 'linear-gradient(90deg, #3B3355 3%, #5D5D81 100%)',
  '--accent': '#BFCDE0',
  '--muted': '#5D5D81',
};

export const darkTheme = {
  '--primary': '#694A38',
  '--secondary': '#3B3355',
  '--light-bg': '#000505',
  '--dark-bg': '#FEFCFD',
  '--light-text': '#000505',
  '--dark-text': '#FEFCFD',
  '--card-bg': '#F4AC45',
  '--card-shadow': '0 4px 6px rgba(0, 0, 0, 0.3)',
  '--gradient': 'linear-gradient(90deg, #5D5D81 3%, #3B3355 100%)',
  '--accent': '#BFCDE0',
  '--muted': '#5D5D81',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    background: ${props => props.theme['--light-bg']};
    color: ${props => props.theme['--dark-text']};
    transition: all 0.3s ease;
    padding-top: 20px;
  }

  section {
    padding: 5rem 0;
    position: relative;
  }

  ::selection {
    background: ${props => props.theme['--primary']};
    color: ${props => props.theme['--light-text']};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme['--light-bg']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme['--gradient']};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme['--primary']};
  }

  /* Animations */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Utility Classes */
  .gradient-text {
    background: ${props => props.theme['--gradient']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;
  }

  .card {
    background: ${props => props.theme['--card-bg']};
    border-radius: 15px;
    box-shadow: ${props => props.theme['--card-shadow']};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    background: ${props => props.theme['--gradient']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Button Styles */
  .btn {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${props => props.theme['--gradient']};
    color: ${props => props.theme['--light-text']};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .btn-outline {
    background: transparent;
    border: 2px solid ${props => props.theme['--primary']};
    color: ${props => props.theme['--primary']};

    &:hover {
      background: ${props => props.theme['--primary']};
      color: ${props => props.theme['--light-text']};
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
`; 