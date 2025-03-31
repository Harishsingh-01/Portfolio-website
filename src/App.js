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
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const { isDarkMode } = useTheme();
  useScrollAnimation();

  return (
    <AnimatePresence mode="wait">
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <main>
          <section className="scroll-reveal">
            <Hero />
          </section>
          <section className="scroll-reveal">
            <Skills />
          </section>
          <section className="scroll-reveal">
            <Projects />
          </section>
          <section className="scroll-reveal">
            <Certificates />
          </section>
          <section className="scroll-reveal">
            <Contact />
          </section>
        </main>
      </StyledThemeProvider>
    </AnimatePresence>
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