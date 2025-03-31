import { createGlobalStyle } from 'styled-components';
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  popUp,
  glow,
  float,
  rotate,
  shake,
  pulse,
  parallaxBackground
} from './animations';

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
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(31, 31, 31, 0.9), rgba(45, 45, 45, 0.9));
      background-size: 400% 400%;
      animation: ${parallaxBackground} 15s ease infinite;
      z-index: -1;
      pointer-events: none;
    }
  }

  /* Animation utility classes */
  .fade-in-up {
    animation: ${fadeInUp} 0.8s ease forwards;
  }

  .slide-in-left {
    animation: ${slideInLeft} 0.8s ease forwards;
  }

  .slide-in-right {
    animation: ${slideInRight} 0.8s ease forwards;
  }

  .pop-up {
    animation: ${popUp} 0.5s ease forwards;
  }

  .glow {
    animation: ${glow} 2s ease-in-out infinite;
  }

  .float {
    animation: ${float} 3s ease-in-out infinite;
  }

  .rotate {
    animation: ${rotate} 4s linear infinite;
  }

  .shake {
    animation: ${shake} 0.5s ease-in-out;
  }

  .pulse {
    animation: ${pulse} 2s ease-in-out infinite;
  }

  /* Scroll-based animations */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hover effects */
  .hover-glow {
    transition: all 0.3s ease;
    &:hover {
      animation: ${glow} 2s ease-in-out infinite;
    }
  }

  .hover-scale {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  .hover-float {
    transition: transform 0.3s ease;
    &:hover {
      animation: ${float} 3s ease-in-out infinite;
    }
  }
`;

export const lightTheme = {
  background: 'rgba(255, 255, 255, 0.9)',
  text: '#1f1f1f',
  secondary: '#f0f0f0',
};

export const darkTheme = {
  background: 'rgba(31, 31, 31, 0.9)',
  text: '#ffffff',
  secondary: '#2d2d2d',
}; 