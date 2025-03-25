import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
// import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/contact';
const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </StyledThemeProvider>
    

  );
};

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper; 