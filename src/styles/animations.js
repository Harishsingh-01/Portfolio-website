import { keyframes } from 'styled-components';

// Fade in and slide up animation
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide in from left
export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Slide in from right
export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Pop up animation
export const popUp = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Glow effect
export const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(14, 239, 255, 0.5),
                0 0 10px rgba(14, 239, 255, 0.3),
                0 0 15px rgba(14, 239, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(14, 239, 255, 0.8),
                0 0 20px rgba(14, 239, 255, 0.5),
                0 0 30px rgba(14, 239, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(14, 239, 255, 0.5),
                0 0 10px rgba(14, 239, 255, 0.3),
                0 0 15px rgba(14, 239, 255, 0.2);
  }
`;

// Floating animation
export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Rotate animation
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Shake animation
export const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
`;

// Pulse animation
export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Background parallax effect
export const parallaxBackground = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`; 