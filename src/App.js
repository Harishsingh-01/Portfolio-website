import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme, GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/contact';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const App = () => {
  const { isDarkMode } = useTheme();
  useScrollAnimation();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AnimatePresence>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </AnimatePresence>
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